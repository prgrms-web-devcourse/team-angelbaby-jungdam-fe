import styled from '@emotion/styled';
import React from 'react';
import { Header } from '@components/domain';
import { Button, Icon } from '@components/base';
import font from '@assets/fonts';
import color from '@assets/colors';

const DiaryCreatePage = () => {
  const leftHeaderContent = () => {
    return (
      <>
        <Button>
          <Icon name="ep:back" color={color.brown} />
        </Button>
      </>
    );
  };

  const centerHeaderContent = () => {
    const Span = styled.span`
      white-space: nowrap;
      ${font.heading_20};
    `;

    return <Span>다이어리 만들기</Span>;
  };

  return (
    <>
      <Header
        leftComponent={leftHeaderContent()}
        centerComponent={centerHeaderContent()}
      />
    </>
  );
};

export default DiaryCreatePage;
