import api from './api';

export const getStoryBook = async ({ albumId }) =>
  await api({
    url: `api/v1/albums/${albumId}/diaries/story-book/group`,
    type: 'GET',
  });

export const getStoryBookDetail = async ({
  albumId,
  cursorId = '',
  participantId,
  pageSize = 8,
}) =>
  await api({
    url: `api/v1/albums/${albumId}/diaries/story-book?participantId=${participantId}&cursorId=${cursorId}&pageSize=${pageSize}`,
    type: 'GET',
  });
