import React from 'react';
import styled from '@emotion/styled';
import DefaultContainer from '@styles/DefaultContainer';
import font from '@assets/fonts';
import color from '@assets/colors';
import { Input, Upload, Icon, Button } from '@components/base';
import { DetailPageHeader } from '@components/domain';

const ALBUM_EDIT_LIST = [
  {
    name: 'ALBUM_TITLE',
    text: '앨범 명을 입력해주세요.',
    type: 'input',
  },
  {
    name: 'ALBUM_PICTURE',
    text: '대표 사진을 등록해주세요.',
    type: 'upload',
  },
  {
    name: 'ALBUM_FAMILY_MOTTO',
    text: '가훈을 입력해주세요.',
    type: 'input',
  },
];

const AlbumSettingsEditPageWrapper = styled(DefaultContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 60px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 42px;
`;
const ContentTitle = styled.span`
  ${font.content_16}
`;

const UploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 266px;
  border: 1px solid ${color.brown};
  border-radius: 15px;
`;

const AlbumSettingsEditPage = () => {
  const EditLists = (list) =>
    list.map(({ name, text, type }) => (
      <ContentWrapper>
        <ContentTitle>{text}</ContentTitle>
        {type === 'upload' ? (
          <UploadWrapper>
            <Upload>
              <Icon name="fluent:camera-add-24-regular" height={48} />
            </Upload>
          </UploadWrapper>
        ) : (
          <Input name={name} placeholder={name} />
        )}
      </ContentWrapper>
    ));

  return (
    <AlbumSettingsEditPageWrapper>
      <DetailPageHeader pageTitle="앨범 정보 수정" />
      {EditLists(ALBUM_EDIT_LIST)}
      <Button mode="primary" onClick={() => {}}>
        확인
      </Button>
    </AlbumSettingsEditPageWrapper>
  );
};

export default AlbumSettingsEditPage;
