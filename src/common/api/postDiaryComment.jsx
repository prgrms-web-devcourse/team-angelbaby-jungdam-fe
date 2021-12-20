import api from './api';

export const postDiaryComment = async ({ albumId, diaryId, comment }) => {
  const {
    data: { data },
  } = await api({
    url: `/api/v1/albums/${albumId}/diaries/${diaryId}/comments`,
    type: 'POST',
    params: comment,
  });

  return data;
};
