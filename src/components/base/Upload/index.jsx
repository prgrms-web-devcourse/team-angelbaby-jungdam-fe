import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: inline-block;
`;

const Input = styled.input`
  display: none;
`;

const Button = styled.button`
  all: unset;
`;

const Upload = ({ children, onChange, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [files, setFiles] = useState(null);
  const imageUploadInput = useRef(null);

  const handleImageUploadChange = (e) => {
    const files = e.target.files;
    const changedFiles = files;

    setFiles(changedFiles);

    onChange && onChange(changedFiles);
  };

  const handleImageUploadClick = () => {
    imageUploadInput.current.click();
  };

  return (
    <Container>
      <Input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        multiple
        ref={imageUploadInput}
        onChange={handleImageUploadChange}
      />
      <Button type="button" onClick={handleImageUploadClick} {...props}>
        {children}
      </Button>
    </Container>
  );
};

export default Upload;
