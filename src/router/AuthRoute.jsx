import React from 'react';
import { useAuth } from '@hooks';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
  const token = useAuth();
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
