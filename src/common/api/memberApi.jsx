import api from './api';

export const getMember = async () =>
  await api({
    url: '/api/v1/members',
    method: 'get',
  });
