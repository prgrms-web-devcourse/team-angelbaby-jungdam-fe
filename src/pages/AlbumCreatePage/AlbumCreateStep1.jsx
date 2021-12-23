import React, { useEffect, useRef } from 'react';
import { Input } from '@components/base';
import { borderColor, errorMsg } from '.';

const AlbumCreateStep1 = ({ formData, handleChange, errors }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <Input
        css={borderColor}
        size="base"
        placeholder="앨범 명"
        name="albumName"
        value={formData.albumName}
        onChange={handleChange}
        ref={ref}
        error={errors.albumName && true}
      />
      {errors.albumName && <span css={errorMsg}>{errors.albumName}</span>}
    </>
  );
};

export default AlbumCreateStep1;
