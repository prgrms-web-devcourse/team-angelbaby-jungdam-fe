import React from 'react';
import DefaultContainer from '@styles/DefaultContainer';
import styled from '@emotion/styled';
import { StoryBookDiaryList, DetailPageHeader } from '@components/domain';
import { useNavigate } from 'react-router';

const DUMMY_DATA = {
  avatar: 'https://picsum.photos/200/200',
  memberName: '구피',
  diaryList: [
    {
      diaryImage: 'https://picsum.photos/200/200',
      title: '스토리북 제목',
      dateTime: '2020-01-01',
    },
    {
      diaryImage: 'https://picsum.photos/200/200',
      title: '스토리북 제목',
      dateTime: '2020-01-01',
    },
    {
      diaryImage: 'https://picsum.photos/200/200',
      title: '스토리북 제목',
      dateTime: '2020-01-01',
    },
    {
      diaryImage: 'https://picsum.photos/200/200',
      title: '스토리북 제목',
      dateTime: '2020-01-01',
    },
  ],
};

const StoryBookDetailPageContainer = styled(DefaultContainer)`
  height: auto;
  padding: 38px 0 0;
  box-sizing: content-box;
`;

const StoryBookDetailPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StoryBookDetailPageContainer>
      <DetailPageHeader
        handleGoBack={handleGoBack}
        pageTitle={`'${DUMMY_DATA.memberName}' 님의 스토리북`}
      />
      <StoryBookDiaryList diaryList={DUMMY_DATA.diaryList} />
    </StoryBookDetailPageContainer>
  );
};

export default StoryBookDetailPage;
