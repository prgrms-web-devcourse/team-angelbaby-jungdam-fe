import React from 'react';
import font from '@assets/fonts';
import color from '@assets/colors';
import styled from '@emotion/styled';
import { DimImage, Image } from '@components/base';
import Family from '@assets/Image/Family.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SliderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AlbumTitle = styled.h2`
  color: ${color.white};
  ${font.heading_20};
  margin-bottom: 6px;
`;
const AlbumMotto = styled.p`
  color: ${color.white};
  ${font.content_16};
`;

const NoneAlbumGuide = styled.p`
  color: ${color.black};
  text-align: center;
  ${font.content_12};
`;

const AlbumSwiper = () => {
  const { Albums } = useSelector((state) => state.album);

  const swiperStyle = {
    margin: '0 -32px',
    height: '40vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const slider = {
    width: '85%',
  };

  const renderSlide = (slides) =>
    slides.map(({ id, title, familyMotto, thumbnail }) => (
      <SwiperSlide style={slider} key={id}>
        <Link to={`/album/${id}`} key={id}>
          <SliderBox>
            <DimImage src={thumbnail}>
              <AlbumTitle>{title}</AlbumTitle>
              <AlbumMotto>{familyMotto}</AlbumMotto>
            </DimImage>
          </SliderBox>
        </Link>
      </SwiperSlide>
    ));

  return (
    <>
      {Albums.length > 0 ? (
        <Swiper
          style={swiperStyle}
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={'auto'}
        >
          {renderSlide(Albums)}
        </Swiper>
      ) : (
        <SliderBox>
          <Image src={Family} width="150px" height="150px" />
          <NoneAlbumGuide>
            아직 생성 된 가족 앨범이 없습니다.
            <br />
            앨범을 생성하고 가족과의 추억을 기록해보세요!
          </NoneAlbumGuide>
        </SliderBox>
      )}
    </>
  );
};

export default AlbumSwiper;
