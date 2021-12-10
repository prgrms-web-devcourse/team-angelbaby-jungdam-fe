import React, { useEffect } from 'react';
import QueryString from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';

const OAuthRedirect = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const { token } = QueryString.parse(search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    if (token) {
      // navigate('/');
      // Member 데이터 요청 => 정상 요청 시 데이터 저장 후 MainRedirect
      // ReduxStore 토큰 저장 + 멤버 정보 저장
      // 에러 요청 시 => 에러 메시지 출력 후 로그인 페이지로 이동
      console.log('토큰 있음');
    } else {
      // navigate('/login');
      console.log('토큰 없음!');
    }
  }, [token, navigate]);

  return <></>;
};

export default OAuthRedirect;
