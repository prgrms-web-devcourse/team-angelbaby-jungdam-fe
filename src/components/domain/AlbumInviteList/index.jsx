import React from 'react';
import styled from '@emotion/styled';
import { Skeleton } from '@components/base';
import AlbumInviteCard from './AlbumInviteCard';
import font from '@assets/fonts';
import { useSelector } from 'react-redux';

const AlbumInviteListContainer = styled.ul`
  display: flex;
  min-height: 100px;
  flex-direction: column;
`;

const NoneAlbumText = styled.p`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  ${font.content_16};
`;

const AlbumInviteList = () => {
  const { InviteList, isLoading } = useSelector((state) => state.album);
  const renderAlbumInviteList = (albums) =>
    albums.length > 0 ? (
      albums.map(({ invitationId, albumTitle, invitationCreatedAt }) => (
        <AlbumInviteCard
          key={invitationId}
          invitationId={invitationId}
          albumTitle={albumTitle}
          invitationCreatedAt={invitationCreatedAt}
        />
      ))
    ) : (
      <NoneAlbumText>아직 초대 받은 앨범이 없습니다.</NoneAlbumText>
    );

  return (
    <AlbumInviteListContainer>
      {isLoading ? (
        <Skeleton.Line count={3} />
      ) : (
        renderAlbumInviteList(InviteList)
      )}
    </AlbumInviteListContainer>
  );
};

export default AlbumInviteList;
