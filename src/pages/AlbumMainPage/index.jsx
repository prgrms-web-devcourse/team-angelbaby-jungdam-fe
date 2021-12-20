import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Navigation,
  AlbumMainHeader,
  AlbumMainTimeline,
} from '@components/domain';
import { getAlbumMainDiaries } from '@api/getAlbumMainDiaries';

const AlbumMainPage = () => {
  const { albumId } = useParams();
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const data = await getAlbumMainDiaries({ albumId });

        setState(data);
      } catch (e) {
        console.log(e.response.data.message);
      }
    };

    fetchDiaries();
  }, [albumId]);

  if (state.length === 0) return null;

  return (
    <>
      <AlbumMainHeader
        albumName="극락이들"
        familyMotto="코딩을 열씨미 하자"
        role="OWNER"
      />
      <AlbumMainTimeline diaries={state.diaries} />
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
