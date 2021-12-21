import api from './api';

export const getDiaryContents = async ({ albumId, diaryId }) => {
  const {
    data: { data },
  } = await api({
    url: `/api/v1/albums/${albumId}/diaries/${diaryId}`,
  });

  return data;
};
