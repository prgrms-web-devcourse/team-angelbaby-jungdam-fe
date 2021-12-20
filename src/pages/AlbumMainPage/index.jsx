import React from 'react';
import {
  Navigation,
  AlbumMainHeader,
  AlbumMainTimeline,
} from '@components/domain';

const AlbumMainPage = () => {
  return (
    <>
      <AlbumMainHeader
        albumName="극락이들"
        familyMotto="코딩을 열씨미 하자"
        role="OWNER"
      />
      <AlbumMainTimeline diaries={DUMMY_DATA.diaries} />
      <Navigation />
    </>
  );
};

const DUMMY_DATA = {
  diaries: [
    {
      diary: {
        diaryId: '5',
        title: '사랑하는 우리 가족',
        recordedAt: '2012-02-13',
        diaryPhotos: [
          '../../assets/defaultUser.png',
          '../../assets/defaultUser.png',
          '../../assets/defaultUser.png',
        ],
      },
      participant: {
        avatar: '../../assets/defaultUser.png',
        nickname: '정담명훈',
      },
    },
    {
      diary: {
        diaryId: '6',
        title: '사랑하는 우리 가족2',
        recordedAt: '2012-02-13',
        diaryPhotos: [
          '../../assets/defaultUser.png',
          '../../assets/defaultUser.png',
          '../../assets/defaultUser.png',
        ],
      },
      participant: {
        avatar: '../../assets/defaultUser.png',
        nickname: '정담명훈',
      },
    },
    {
      diary: {
        diaryId: '7',
        title: '사랑하는 우리 가족3',
        recordedAt: '2012-02-13',
        diaryPhotos: [
          '../../assets/defaultUser.png',
          '../../assets/defaultUser.png',
          '../../assets/defaultUser.png',
        ],
      },
      participant: {
        avatar: '../../assets/defaultUser.png',
        nickname: '정담명훈',
      },
    },
  ],
};

export default AlbumMainPage;
