import React from 'react';
import { Route } from 'react-router-dom';

const PreventedRoute = ({ ...rest }) => {
  return (
    <Route
      {...rest}
      // render={(props) => (accessToken ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default PreventedRoute;
