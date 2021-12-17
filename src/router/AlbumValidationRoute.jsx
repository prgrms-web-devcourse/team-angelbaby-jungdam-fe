import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useAlbumValidation } from '@hooks';
const AlbumValidationRoute = () => {
  const { albumId } = useParams();
  const existance = useAlbumValidation({ albumId });
  return existance ? <Outlet /> : <Navigate to="/404Page" />;
};

export default AlbumValidationRoute;
