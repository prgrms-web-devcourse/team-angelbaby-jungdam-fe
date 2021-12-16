import React from 'react';
import styled from 'styled-components';
import DefaultContainer from '@styles/DefaultContainer';
import font from '@assets/fonts';
import color from '@assets/colors';
import { Image } from '@components/base';
import { OnlyInfoHeader, Navigation } from '@components/domain';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/components/pagination/pagination.min.css';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination]);

const DUMMY_DATA = [
  {
    id: 123, // 해당 일자 일기(Diary) id
    title: '치킨', // 타이틀
    thumbnail: 'https://swiperjs.com/demos/images/nature-1.jpg', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-07T00:00:00.000Z', // 일자
  },
  {
    id: 124, // 해당 일자 일기(Diary) id
    title: '해물파전', // 타이틀
    thumbnail: 'https://swiperjs.com/demos/images/nature-2.jpg', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-08T00:00:00.000Z', // 일자
  },
  {
    id: 125, // 해당 일자 일기(Diary) id
    title: '족발(마늘족발이면좋음)', // 타이틀
    thumbnail: 'https://swiperjs.com/demos/images/nature-3.jpg', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-09T00:00:00.000Z', // 일자
  },
  {
    id: 126, // 해당 일자 일기(Diary) id
    title: '붕어빵2개에1천원', // 타이틀
    thumbnail: 'https://swiperjs.com/demos/images/nature-4.jpg', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-10T00:00:00.000Z', // 일자
  },
  {
    id: 127, // 해당 일자 일기(Diary) id
    title: '아배고파', // 타이틀
    thumbnail: 'https://swiperjs.com/demos/images/nature-5.jpg', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-11T00:00:00.000Z', // 일자
  },
  {
    id: 128, // 해당 일자 일기(Diary) id
    title: '모듬회매운탕추가', // 타이틀
    thumbnail: 'https://swiperjs.com/demos/images/nature-6.jpg', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-12T00:00:00.000Z', // 일자
  },
  {
    id: 129, // 해당 일자 일기(Diary) id
    title: '등갈비', // 타이틀
    thumbnail: 'https://swiperjs.com/demos/images/nature-7.jpg', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-13T00:00:00.000Z', // 일자
  },
  {
    id: 130, // 해당 일자 일기(Diary) id
    title: '곱창', // 타이틀
    thumbnail: 'https://swiperjs.com/demos/images/nature-8.jpg', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-14T00:00:00.000Z', // 일자
  },
  {
    id: 131, // 해당 일자 일기(Diary) id
    title: '보쌈', // 타이틀
    thumbnail: 'https://swiperjs.com/demos/images/nature-9.jpg', // 해당 일자 일기 맨 처음 id
    recordedAt: '2021-12-15T00:00:00.000Z', // 일자
  },
];

const SpecialMomentPageWrapper = styled(DefaultContainer)`
  width: 100%;
  padding-top: 60px;
  ${font.content_16}
`;

const PageTitle = styled.div`
  margin-top: 24px;
  text-align: center;
  ${font.heading_20};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`;

const TooltipWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 24px;
  background: #5677f4;
  color: ${color.white};
  padding: 12px;
  border-radius: 18px;
  box-shadow: 2px 2px 3px #d1d1d1;
  z-index: -1;
`;

const StyledSwiper = styled(Swiper)`
  box-sizing: content-box;
  width: 100%;
  padding: 34px;
  margin: 0 -24px;
`;

const ListTitleWrapper = styled.div`
  text-align: center;
  margin-top: 24px;
  ${font.content_18}
`;

const SpecialMomentPage = () => {
  const slideStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
  };

  const slideList = (list) =>
    list.map(({ title, thumbnail, recordedAt }, index) => (
      <SwiperSlide style={slideStyle}>
        <TooltipWrapper>{recordedAt.substr(0, 10)}</TooltipWrapper>
        <Image
          src={thumbnail}
          alt={index}
          style={{ borderRadius: 12, width: '100%' }}
        />
        <ListTitleWrapper>{title}</ListTitleWrapper>
      </SwiperSlide>
    ));

  return (
    <>
      <SpecialMomentPageWrapper>
        <OnlyInfoHeader pageTitle="특별한 순간" />
        <PageTitle>'앨범 명'의 기억들</PageTitle>
        <ContentWrapper>
          <StyledSwiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={1}
            height={550}
            coverflowEffect={{
              // rotate: 50,
              // stretch: 0,
              // depth: 100,
              // modifier: 1,
              slideShadows: false,
            }}
            // pagination={true}
          >
            {slideList(DUMMY_DATA)}
          </StyledSwiper>
        </ContentWrapper>
      </SpecialMomentPageWrapper>
      <Navigation />
    </>
  );
};

export default SpecialMomentPage;
