import api from './api';

export const putBookmark = async ({ albumId, diaryId }) => {
  const {
    data: { data },
  } = await api({
    url: `/api/v1/albums/${albumId}/diaries/${diaryId}/bookmark`,
    type: 'PUT',
  });

  console.log(data);
  return data;
};
