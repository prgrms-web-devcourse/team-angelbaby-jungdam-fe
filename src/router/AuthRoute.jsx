import React from 'react';
import { Route } from 'react-router-dom';

const AuthRoute = ({ ...rest }) => {
  return (
    <Route
      {...rest}
      // render={(props) =>
      //   accessToken ? (
      //     <Component {...props} />
      //   ) : (
      //     <Redirect
      //       to={{
      //         pathname: '/login',
      //         state: { text: 'Token 만료' },
      //       }}
      //     />
      //   )
      // }
    />
  );
};

export default AuthRoute;
