import React from 'react';
import { Input } from '@components/base';
import { borderColor } from '.';

const AlbumCreateStep2 = ({ formData, handleChange }) => {
  return (
    <Input
      css={borderColor}
      size="base"
      placeholder="잠은 죽어서 자자"
      name="albumMotto"
      value={formData.albumMotto}
      onChange={handleChange}
    />
  );
};

export default AlbumCreateStep2;
