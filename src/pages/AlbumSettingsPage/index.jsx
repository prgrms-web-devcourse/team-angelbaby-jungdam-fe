import React from 'react';
import styled from '@emotion/styled';
import DefaultContainer from '@styles/DefaultContainer';
import color from '@assets/colors';
import font from '@assets/fonts';
import { useNavigate } from 'react-router-dom';
import { DetailPageHeader } from '@components/domain';

const ALBUM_SETTINGS_LIST = [
  {
    name: '그룹 정보 수정',
    to: '', // 추가 예정
  },
  {
    name: '그룹 식제',
    to: '', // 추가 예정
  },
];

const AlbumSettingsPageWrapper = styled(DefaultContainer)`
  width: 100%;
  padding-top: 60px;
  ${font.content_16}
`;

const AlbumSettingsTitle = styled.div`
  height: 32px;
  ${font.heading_20}
  border-bottom: 1px solid ${color.grey};
`;

const SettingsList = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  border-bottom: 1px solid ${color.grey_50};
`;

const AlbumSettingsPage = () => {
  const navigate = useNavigate();

  const albumSettings = (list) =>
    list.map(({ name, to }) => (
      <SettingsList
        onClick={() => {
          navigate(to);
        }}
      >
        {name}
      </SettingsList>
    ));

  return (
    <AlbumSettingsPageWrapper>
      <DetailPageHeader pageTitle="앨범 설정" />
      <AlbumSettingsTitle>앨범 설정</AlbumSettingsTitle>
      {albumSettings(ALBUM_SETTINGS_LIST)}
    </AlbumSettingsPageWrapper>
  );
};

export default AlbumSettingsPage;
