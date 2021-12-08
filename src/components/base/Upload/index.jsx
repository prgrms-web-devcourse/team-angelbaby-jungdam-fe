import React from 'react';
import { Icon } from '@components/base';
import color from '@assets/colors';
import { useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Input = styled.input`
  display: none;
`;

const IconStyle = css`
  cursor: pointer;
`;

const Upload = () => {
  const imageUploadInput = useRef(null);

  const handleImageUploadClick = () => {
    imageUploadInput.current.click();
  };

  return (
    <>
      <Input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        multiple
        ref={imageUploadInput}
      />
      <Icon
        name="fluent:camera-add-24-regular"
        color={color.brown}
        height={48}
        onClick={handleImageUploadClick}
        css={IconStyle}
      />
    </>
  );
};

export default Upload;
