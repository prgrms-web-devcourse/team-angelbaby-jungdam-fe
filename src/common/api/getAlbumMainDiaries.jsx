import api from './api';

export const getAlbumMainDiaries = async ({ albumId }) => {
  const {
    data: { data },
  } = await api({
    url: `/api/v1/albums/${albumId}/diaries`,
  });

  console.log(data);
  return data;
};
