import React from 'react';
import styled from 'styled-components';
import DefaultContainer from '@styles/DefaultContainer';
import font from '@assets/fonts';
import color from '@assets/colors';
import { OnlyInfoHeader, Navigation } from '@components/domain';

const DUMMY_DATA = [
  {
    id: 123, // 해당 일자 일기(Diary) id
    title: '안녕나야', // 타이틀
    thumbnail: 'https://s3.sfads', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-07T00:00:00.000Z', // 일자
  },
  {
    id: 123, // 해당 일자 일기(Diary) id
    title: '안녕나야', // 타이틀
    thumbnail: 'https://s3.sfads', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-07T00:00:00.000Z', // 일자
  },
  {
    id: 123, // 해당 일자 일기(Diary) id
    title: '안녕나야', // 타이틀
    thumbnail: 'https://s3.sfads', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-07T00:00:00.000Z', // 일자
  },
];

const SpecialMomentPageWrapper = styled(DefaultContainer)`
  width: 100%;
  padding-top: 70px;
  ${font.content_16}
`;

const PageTitle = styled.div`
  text-align: center;
  ${font.heading_20};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  gap: 12px;
`;

const TooltipWrapper = styled.div`
  background: #5677f4;
  color: ${color.white};
  padding: 12px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 2px 2px 3px #d1d1d1;
  z-index: -1;
  width: 72px;
`;

const SpecialMomentPage = () => {
  return (
    <>
      <SpecialMomentPageWrapper>
        <OnlyInfoHeader pageTitle="특별한 순간" />
        <PageTitle>'앨범 명'의 기억들</PageTitle>
        <ContentWrapper>
          <TooltipWrapper>테스트</TooltipWrapper>
          {'스와이퍼 영역'}
        </ContentWrapper>
      </SpecialMomentPageWrapper>
      <Navigation />
    </>
  );
};

export default SpecialMomentPage;
