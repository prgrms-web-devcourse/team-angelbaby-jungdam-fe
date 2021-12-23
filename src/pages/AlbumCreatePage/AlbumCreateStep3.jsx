import React, { useState } from 'react';
import { Upload, Icon } from '@components/base';
import { errorMsg } from '.';
import styled from '@emotion/styled';
import color from '@assets/colors';
import { css } from '@emotion/react';

const UploadContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const UploadBox = css`
  cursor: pointer;
`;

const UploadPreview = styled.div`
  display: flex;
  background-image: url(${({ src }) => src || null});
  background-size: cover;
  background-position: center;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  box-shadow: 1px 1px 2px 2px ${color.black_70};
  :active {
    background-color: ${color.beige};
  }
`;

export const AlbumCreateStep3 = ({ handleChange, errors }) => {
  const [Image, setImage] = useState('');

  const handleUpload = (e) => {
    const reader = new FileReader();
    const image = e.target.files[0];
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setImage(reader.result);
      handleChange(e.target.files[0]);
    };
  };

  return (
    <>
      <UploadContainer>
        <Upload css={UploadBox} onChange={handleUpload} name={'albumImageFile'}>
          <UploadPreview src={Image}>
            {Image ? null : (
              <Icon name="fluent:camera-add-24-regular" size={24} />
            )}
          </UploadPreview>
        </Upload>
        {errors.albumImageFile && (
          <span css={errorMsg}>{errors.albumImageFile}</span>
        )}
      </UploadContainer>
    </>
  );
};

export default AlbumCreateStep3;
