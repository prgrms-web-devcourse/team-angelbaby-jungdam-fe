import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@hooks';

const PreventedRoute = () => {
  const token = useAuth();
  return !token ? <Outlet /> : <Navigate to="/" />;
};

export default PreventedRoute;
