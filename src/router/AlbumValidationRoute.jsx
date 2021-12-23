import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useAlbumValidation } from '@hooks';
import { useDispatch } from 'react-redux';
import { fetchMemberRole } from '@redux/member';
const AlbumValidationRoute = () => {
  const { albumId } = useParams();
  const dispatch = useDispatch();
  const existance = useAlbumValidation({ albumId });
  useEffect(() => {
    if (albumId) {
      dispatch(fetchMemberRole({ albumId }));
    }
  }, [dispatch, albumId]);
  return existance && <Outlet />;
};

export default AlbumValidationRoute;
