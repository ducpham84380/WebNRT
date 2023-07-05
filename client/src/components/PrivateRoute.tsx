import React from 'react';
import { RouteProps, Route,RouteComponentProps } from 'react-router-dom';

import Login from '../pages/Account/Login';


export const PrivateRoute = ({ children, ...rest }: RouteProps): JSX.Element => {
    
  return (
  <Route {...rest} render={() => ( <Login /> )} ></Route>
  );
};


// export default PrivateRounte