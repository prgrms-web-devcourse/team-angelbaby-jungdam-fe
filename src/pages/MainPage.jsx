import React from 'react';
import { Navigation } from '@components/domain';
import { MainHeader } from '../components/domain';

const MainPage = () => {
  return (
    <>
      <MainHeader
        groupTitle="극락이들"
        familyMotto="코딩을 열씨미 하자"
        role="OWNER"
      />
      <div style={{ paddingTop: 60 }}>메인화면입니다.</div>
      <Navigation />
    </>
  );
};

export default MainPage;
