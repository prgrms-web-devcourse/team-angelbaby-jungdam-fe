import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import QueryString from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';
import { member, fetchMemberLogin } from '@redux/member';

const OAuthRedirect = () => {
  const { setToken } = member.actions;
  const dispatch = useDispatch();
  const { search } = useLocation();
  const { token } = QueryString.parse(search, {
    ignoreQueryPrefix: true,
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      try {
        dispatch(setToken(token));
        dispatch(fetchMemberLogin());
        navigate('/');
      } catch (error) {
        alert(error);
      }
    } else {
      alert('인증API 실패');
      navigate('/login');
    }
  }, [dispatch, navigate, token, setToken]);

  return <></>;
};

export default OAuthRedirect;
