import api from './api';

export const getAlbums = async () => await api({ url: '/api/v1/albums' });
export const postAlbums = async (params) =>
  await api({ url: '/api/v1/albums', type: 'post', params });
