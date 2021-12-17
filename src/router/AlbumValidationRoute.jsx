import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useAlbumValidation } from '@hooks';
const AlbumValidationRoute = () => {
  const { albumId } = useParams();
  const existance = useAlbumValidation({ albumId });
  return existance && <Outlet />;
};

export default AlbumValidationRoute;
