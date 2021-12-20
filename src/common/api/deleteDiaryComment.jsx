import api from './api';

export const deleteDiaryComment = async ({ albumId, diaryId, commentId }) => {
  const {
    data: { data },
  } = await api({
    url: `/api/v1/albums/${albumId}/diaries/${diaryId}/comments/${commentId}`,
    type: 'DELETE',
  });

  return data;
};
