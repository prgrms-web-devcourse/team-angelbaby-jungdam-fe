import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Image } from '@components/base';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination]);

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 40vh;
  min-height: 40vh;
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const SwiperSlideStyle = {
  width: '85%',
};

const ImageStyle = css`
  border-radius: 5px;
`;

const swiperParams = {
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: true,
  centeredSlides: true,
  grabCursor: true,
};

const DiaryImages = ({ images }) => {
  return (
    <StyledSwiper {...swiperParams}>
      {images.map((image, index) => (
        <SwiperSlide key={index} style={SwiperSlideStyle}>
          <Image
            css={ImageStyle}
            src={image}
            alt="image"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default DiaryImages;
