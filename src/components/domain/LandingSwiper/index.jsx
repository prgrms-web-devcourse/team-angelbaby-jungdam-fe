import React from 'react';
import styled from '@emotion/styled';
import { Lottie } from '@components/base';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper';
import { ReactComponent as Logo } from '@assets/Image/Logo.svg';
import font from '@assets/fonts';

// Swiper Core
SwiperCore.use([Pagination]);

const slides = [
  {
    title: '정(情)을 기록하며',
    subTitle: '가족 앨범에 일기를 적어보세요.',
    lottie: 'notepad',
  },
  {
    title: '담(談)을 나누며',
    subTitle: '서로의 일기를 보며 이야기해보세요.',
    lottie: 'family',
  },
  {
    title: '추억에 빠져보세요.',
    subTitle: '특별한 순간의 일기로 추억에 빠져보세요.',
    lottie: 'laugh',
  },
];

const SliderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LogoBox = styled.div`
  text-align: center;
  flex: 1;
`;

const Title = styled.h1`
  flex: 1;
  margin-top: 15px;
  ${font.heading_20};
`;

const Content = styled.p`
  flex: 2;
`;

const renderSlide = (slides) =>
  slides.map(({ title, subTitle, lottie }, index) => (
    <SwiperSlide key={index}>
      <SliderBox>
        <LogoBox>
          <Logo />
          <Title>{title}</Title>
        </LogoBox>
        <Lottie height="60%" animationData={lottie} />
        <Content>{subTitle}</Content>
      </SliderBox>
    </SwiperSlide>
  ));

const LandingSwiper = () => {
  const swiperStyle = {
    width: '100%',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Swiper
      style={swiperStyle}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {renderSlide(slides)}
    </Swiper>
  );
};

export default LandingSwiper;
