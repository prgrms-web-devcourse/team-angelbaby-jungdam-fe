import api from './api';

export const getDiaryComments = async ({
  albumId,
  diaryId,
  cursorId,
  size,
}) => {
  const {
    data: { data },
  } = await api({
    url: `/api/v1/albums/${albumId}/diaries/${diaryId}/comments?cursorId=${cursorId}&pageSize=${size}`,
  });

  return data;
};
