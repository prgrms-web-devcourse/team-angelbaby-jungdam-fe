import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { member, fetchMemberLogin } from '@redux/member';

const DUMMY_LIST = {
  choi: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY0MTY5NTE4OX0.tpnwZuo7edWMSj7sElY5A29AO_GudZ2yHfgDNqUTNpw',
  hoon: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY0MTY5MzY1MX0.tZVVbLo6dZMUQo3YEFL2U1A5Ug4HN0CWZnXnjWZQkfw',
  bingle:
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2Iiwicm9sZSI6IlJPTEVfVVNFUiIsImV4cCI6MTY0MTY5MzQ5MH0.g-PKBRetSTK_Lh0xIYqoZrCevALg4cjjcmL30084QV4',
};

// /test/:name
// /test/'닉네임' 를 입력하시면 해당 닉네임의 토큰을 발급받아서 로그인 시킵니다.

const TestPage = () => {
  const { setToken } = member.actions;
  const navigate = useNavigate();
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
      dispatch(setToken(DUMMY_LIST[name]));
      dispatch(fetchMemberLogin());
      navigate('/');
    } else {
      alert('닉네임이 잘못 입력되었어요.');
      navigate('/login');
    }
  }, [dispatch, navigate, name, setToken]);

  return <></>;
};

export default TestPage;
