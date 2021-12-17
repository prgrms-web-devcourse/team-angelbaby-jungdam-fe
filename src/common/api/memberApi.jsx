import api from './api';

// 유저 데이터 가져오기 (로그인)
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

// 유저 정보 수정하기
export const putMember = async (params) =>
  await api({
    url: '/api/v1/members',
    method: 'put',
    params,
  });
