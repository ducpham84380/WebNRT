// JavaScript
var express = require("express");
var app = express();
app.use(express.static("Public"));
app.use("/scripts", express.static(__dirname + "/node_modules/web3.js-browser/build/"));

var fs = require("fs");
var server = require("http").Server(app);
var io = require("socket.io")(server);
app.io = io;
server.listen(3000);

io.on("connection",function(socket){
    console.log("New connection: "+ socket.id);

    socket.emit("getId", socket.id);
  
    socket.on("sendDataClient", function(data) {
      console.log(data)
      socketIo.emit("sendDataServer", { data });
    })
  
    socket.on("disconnect", () => {
      console.log("Client disconnected: "+ socket.id);
    });
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

fs.readFile("./config.json", "utf8", function(err, data){
    if(err){ throw err };
    var obj = JSON.parse(data);

    // kết nối CSDL mongooseDB mongodb+srv://Narutobako_21:<password>@cluster0.a8gqm.mongodb.net/?retryWrites=true&w=majority
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://'+obj.mongoose.username+':'+obj.mongoose.password+'@'+obj.mongoose.server+'/'+obj.mongoose.dbname+'?retryWrites=true&w=majority',function(err){
        if(err)
        {
            console.log("DataBase khong ket noi: "+err);
        }
        else{
            console.log("DataBase ket noi thanh cong");
        }
    });
    
    // 
    require("./Routes/UploadFile")(app);
    // require("./Routes/User")(app);
});