import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Navigation,
  AlbumMainHeader,
  AlbumMainTimeline,
} from '@components/domain';
import { getAlbumMainDiaries } from '@api/getAlbumMainDiaries';
import { getAlbumTitleInfo } from '@api/albumApi';
import { useSelector } from 'react-redux';
import { Spinner } from '@components/base';
import styled from '@emotion/styled';

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlbumMainPage = () => {
  const { albumId } = useParams();
  const [state, setState] = useState([]);
  const [headerInfo, setHeaderInfo] = useState();
  const role = useSelector((state) => state.member.data.memberRole);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        setIsLoading(true);

        const data = await getAlbumMainDiaries({ albumId });

        setState(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.response.data.message);
      }
    };

    const fetchAlbumTitleInfo = async () => {
      setIsLoading(true);
      try {
        setIsLoading(true);

        const data = await getAlbumTitleInfo({ albumId });
        setHeaderInfo(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.response.data.message);
      }
    };

    fetchDiaries();
    fetchAlbumTitleInfo();
  }, [albumId]);

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner size={24} />
      </SpinnerWrapper>
    );
  }

  return (
    <>
      <AlbumMainHeader
        albumName={headerInfo.title}
        familyMotto={headerInfo.familyMotto}
        role={role}
      />
      <AlbumMainTimeline diaries={state.diaries} />

      <Navigation />
    </>
  );
};

export default AlbumMainPage;
