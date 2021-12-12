import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PreventedRoute = ({ ...rest }) => {
  const { token } = useSelector((state) => state.member);
  return !token ? <Outlet /> : <Navigate to="/" />;
};

export default PreventedRoute;
