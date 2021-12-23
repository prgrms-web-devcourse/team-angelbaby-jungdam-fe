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
        placeholder="항상 행복한 가정이 되자"
        name="albumMotto"
        value={formData.albumMotto}
        onChange={handleChange}
        ref={ref}
        error={errors.albumMotto && true}
      />
      {errors.albumMotto && (
        <errorMsg css={errorMsg}>{errors.albumMotto}</errorMsg>
      )}
    </>
  );
};

export default AlbumCreateStep2;
