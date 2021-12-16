import React from 'react';
import { css } from '@emotion/react';
import {
  Header,
  DiaryHeaderInfo,
  DiaryImages,
  DiaryContent,
  DiaryComment,
  DiaryCommentInput,
} from '@components/domain';
import { Button, Icon } from '@components/base';
import DefaultContainer from '@styles/DefaultContainer';
import color from '@assets/colors';
import { useState, useCallback } from 'react';

const DUMMY_USERINFO = {
  profile: 'https://swiperjs.com/demos/images/nature-7.jpg',
};

const DUMMY_DATA = {
  title: '사랑하는 우리 가족',
  createdAt: '2021년 12월 16일',
  images: [
    'https://user-images.githubusercontent.com/57757719/146334495-e37643ae-93fa-42bc-ab23-11411a778f51.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
  ],
  content:
    '사랑하는 우리 가족을 보면서 내가 항상 느끼는 점\n나는 너무 행복하다. 앞으로도 계속 행복한 나날을 보내고싶다.사랑하는 우리 가족을 보면서 내가 항상 느끼는 점\n나는 너무 행복하다. 앞으로도 계속 행복한 나날을 보내고싶다.사랑하는 우리 가족을 보면서 내가 항상 느끼는 점\n나는 너무 행복하다. 앞으로도 계속 행복한 나날을 보내고싶다.사랑하는 우리 가족을 보면서 내가 항상 느끼는 점\n나는 너무 행복하다. 앞으로도 계속 행복한 나날을 보내고싶다.',
  comments: [
    {
      id: 7,
      username: '엄마',
      profile: 'https://swiperjs.com/demos/images/nature-7.jpg',
      comment:
        '나도 엄마를 보며 느끼는 점\n 엄마가 함께여서 행복해 우리 항상 행복하자.나도 엄마를 보며 느끼는 점\n 엄마가 함께여서 행복해 우리 항상 행복하자.',
    },
    {
      id: 8,
      username: '엄마',
      profile: 'https://swiperjs.com/demos/images/nature-8.jpg',
      comment: '나도 아빠를 보며 느끼는 점\n 함께여서 행복해',
    },
    {
      id: 9,
      username: '엄마',
      profile: 'https://swiperjs.com/demos/images/nature-3.jpg',
      comment: '나도 할머니를 보며 느끼는 점\n 함께여서 행복해',
    },
    {
      id: 10,
      username: '엄마',
      profile: 'https://swiperjs.com/demos/images/nature-7.jpg',
      comment:
        '나도 엄마를 보며 느끼는 점\n 엄마가 함께여서 행복해 우리 항상 행복하자.나도 엄마를 보며 느끼는 점\n 엄마가 함께여서 행복해 우리 항상 행복하자.',
    },
    {
      id: 11,
      username: '엄마',
      profile: 'https://swiperjs.com/demos/images/nature-3.jpg',
      comment: '나도 아빠를 보며 느끼는 점\n 함께여서 행복해',
    },
    {
      id: 12,
      username: '엄마',
      profile: 'https://swiperjs.com/demos/images/nature-3.jpg',
      comment: '나도 할머니를 보며 느끼는 점\n 함께여서 행복해',
    },
  ],
};

const ContainerStyle = css`
  padding-top: 38px;
  overflow-y: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DiaryPage = () => {
  const leftHeaderContent = useCallback(() => {
    return (
      <>
        <Button>
          <Icon name="ep:back" color={color.brown} />
        </Button>
      </>
    );
  }, []);

  return (
    <>
      <DefaultContainer css={ContainerStyle}>
        <Header leftComponent={leftHeaderContent()} />
        <DiaryHeaderInfo
          title={DUMMY_DATA.title}
          createdAt={DUMMY_DATA.createdAt}
        />
        <DiaryImages images={DUMMY_DATA.images} />
        <DiaryContent content={DUMMY_DATA.content} />
        <DiaryComment comments={DUMMY_DATA.comments} />
        <DiaryCommentInput profile={DUMMY_USERINFO.profile} />
      </DefaultContainer>
    </>
  );
};

export default DiaryPage;
