import React, { useEffect, useRef } from 'react';
import { Input } from '@components/base';
import { borderColor, errorMsg } from '.';

const AlbumCreateStep2 = ({ formData, handleChange, errors }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <>
      <Input
        css={borderColor}
        size="base"
        placeholder="잠은 죽어서 자자"
        name="albumMotto"
        value={formData.albumMotto}
        onChange={handleChange}
        ref={ref}
        error={errors.albumMotto && true}
      />
      {errors.albumMotto && <span css={errorMsg}>{errors.albumMotto}</span>}
    </>
  );
};

export default AlbumCreateStep2;
