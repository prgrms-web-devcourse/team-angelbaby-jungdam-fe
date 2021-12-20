import React, { useEffect } from 'react';
import { useAuth } from '@hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMemberLogin } from '@redux/member';
const AuthRoute = () => {
  const token = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchMemberLogin());
    }
  }, [dispatch, token]);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
