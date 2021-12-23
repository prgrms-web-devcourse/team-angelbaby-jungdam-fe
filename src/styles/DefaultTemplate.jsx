import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ResponseDefaultPage } from '@pages';
const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  overflow-y: auto;
`;

const DefaultTemplate = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  // 모바일 환경만 처리
  return width < 550 ? (
    <MainWrapper>{children}</MainWrapper>
  ) : (
    <ResponseDefaultPage resizing={width} />
  );
};

export default DefaultTemplate;
