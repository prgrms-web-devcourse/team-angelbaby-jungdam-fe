import api from './api';

export const getMember = async () =>
  await api({
    url: '/api/v1/members',
    type: 'get',
  });

export const putMember = async (params) =>
  await api({
    url: '/api/v1/members',
    type: 'put',
    params,
  });
