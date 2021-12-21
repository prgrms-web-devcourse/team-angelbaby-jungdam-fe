import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import DefaultContainer from '@styles/DefaultContainer';
import { LandingSwiper } from '@components/domain';
import { BottomFloatButton } from '@components/base';

const LandingPageContainer = styled(DefaultContainer)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <LandingPageContainer>
      <LandingSwiper />
      <BottomFloatButton onClick={handleStartButtonClick}>
        시작하기
      </BottomFloatButton>
    </LandingPageContainer>
  );
};

export default LandingPage;
