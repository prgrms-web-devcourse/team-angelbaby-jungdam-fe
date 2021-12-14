import React from 'react';
import { Input } from '@components/base';
import { borderColor } from '.';

const AlbumCreateStep1 = ({ formData, handleChange }) => {
  return (
    <Input
      css={borderColor}
      size="base"
      placeholder="앨범 명"
      name="albumName"
      value={formData.albumName}
      onChange={handleChange}
    />
  );
};

export default AlbumCreateStep1;
