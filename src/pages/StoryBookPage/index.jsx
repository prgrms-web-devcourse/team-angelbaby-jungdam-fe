import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import font from '@assets/fonts';
import color from '@assets/colors';
import DefaultContainer from '@styles/DefaultContainer';
import { Link } from 'react-router-dom';
import { Avatar, Button } from '@components/base';
import {
  OnlyInfoHeader,
  Navigation,
  StoryBookDiaryList,
} from '@components/domain';

const DUMMY_DATA = [
  {
    avatar: 'https://picsum.photos/200/200',
    memberName: '민석',
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
  },
  {
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
  },
  {
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
  },
];

const StoryBookPageContainer = styled(DefaultContainer)`
  height: auto;
  padding: 38px 0 70px;
  box-sizing: content-box;
`;

const StorybookSubHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0 12px;
`;

const StorybookSubHeaderLeft = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StorybookSubHeader = styled.h2`
  margin-left: 8px;
  color: ${color.black};
  ${font.heading_20};
`;

const buttonStyle = {
  width: '40px',
  height: '20px',
  fontSize: '10px',
  padding: '2px 4px',
  boxSizing: 'content-box',
};

const StoryBookPage = () => {
  const renderStoryBookList = (memberList) =>
    memberList.map(({ avatar, memberName, diaryList }, index) => (
      <div key={index}>
        <StorybookSubHeaderContainer>
          <StorybookSubHeaderLeft>
            <Avatar src={avatar} />
            <StorybookSubHeader>{memberName}의 스토리북</StorybookSubHeader>
          </StorybookSubHeaderLeft>
          <Link to="">
            <Button mode="border" style={buttonStyle}>
              모두 보기
            </Button>
          </Link>
        </StorybookSubHeaderContainer>
        <StoryBookDiaryList diaryList={diaryList} />
      </div>
    ));

  return (
    <>
      <OnlyInfoHeader pageTitle="스토리북" />
      <StoryBookPageContainer>
        {renderStoryBookList(DUMMY_DATA)}
      </StoryBookPageContainer>
      <Navigation />
    </>
  );
};

export default StoryBookPage;
