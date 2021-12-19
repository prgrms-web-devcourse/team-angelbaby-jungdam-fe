import React from 'react';
import { Navigation, AlbumMainHeader } from '@components/domain';

const AlbumMainPage = () => {
  return (
    <>
      <AlbumMainHeader
        albumName="극락이들"
        familyMotto="코딩을 열씨미 하자"
        role="OWNER"
      />
      <div
        style={{
          paddingTop: 38,
        }}
      >
        메인화면입니다.
      </div>
      <Navigation />
    </>
  );
};

export default AlbumMainPage;
