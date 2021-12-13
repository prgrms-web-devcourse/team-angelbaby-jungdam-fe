import React, { useState, useCallback } from 'react';
import { Upload, Icon } from '@components/base';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import color from '@assets/colors';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination]);

const IconStyle = css`
  cursor: pointer;
`;

const StyledSwiper = styled(Swiper)`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 250px;
`;

const DiaryCreateStepThree = () => {
  const [images, setImages] = useState(null);
  const handleUploadImagesChange = useCallback((images) => {
    const imageUrls = [];

    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      const fileReader = new FileReader();

      fileReader.onload = () => {
        console.log(fileReader);
        imageUrls.push(fileReader.result);
        setImages([...imageUrls]);
      };

      fileReader.readAsDataURL(image);
    }
  }, []);

  const swiperParams = {
    pagination: true,
  };

  return (
    <>
      <Upload onChange={handleUploadImagesChange}>
        <Icon
          name="fluent:camera-add-24-regular"
          height={48}
          color={color.brown}
          css={IconStyle}
        />
      </Upload>

      {images && (
        <StyledSwiper {...swiperParams}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                alt=""
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      )}
    </>
  );
};

export default DiaryCreateStepThree;
