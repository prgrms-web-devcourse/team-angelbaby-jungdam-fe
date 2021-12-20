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

export default AlbumMainPage;
