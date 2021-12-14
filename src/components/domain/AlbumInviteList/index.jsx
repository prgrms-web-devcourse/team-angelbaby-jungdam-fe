import React from 'react';
import styled from '@emotion/styled';
import AlbumInviteCard from './AlbumInviteCard';
import font from '@assets/fonts';
// import { useSelector } from 'react-redux';

const AlbumInviteListContainer = styled.ul`
  display: flex;
  min-height: 100px;
  flex-direction: column;
  justify-content: center;
`;

const DUMMY_DATA = [
  {
    id: 1,
    albumName: '앨범 이름',
    inviteTime: '2020-01-01',
  },
  {
    id: 2,
    albumName: '앨범 이름',
    inviteTime: '2020-01-01',
  },
  {
    id: 3,
    albumName: '앨범 이름',
    inviteTime: '2020-01-01',
  },
];

const NoneAlbumText = styled.p`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  ${font.content_16};
`;

const AlbumInviteList = () => {
  //   const { data } = useSelector((state) => state.salbumInviteList);
  const renderAlbumInviteList = (albums) =>
    albums.length > 0 ? (
      albums.map(({ id, albumName, inviteTime }) => (
        <AlbumInviteCard
          key={id}
          id={id}
          albumName={albumName}
          inviteTime={inviteTime}
        />
      ))
    ) : (
      <NoneAlbumText>아직 초대 받은 앨범이 없습니다.</NoneAlbumText>
    );

  return (
    <AlbumInviteListContainer>
      {renderAlbumInviteList(DUMMY_DATA)}
    </AlbumInviteListContainer>
  );
};

export default AlbumInviteList;
