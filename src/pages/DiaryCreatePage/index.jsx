import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import { Header, DiaryCreateStepOne } from '@components/domain';
import { Button, Icon, ProgressBar } from '@components/base';
import font from '@assets/fonts';
import color from '@assets/colors';
import DefaultContainer from '@styles/DefaultContainer';

const DefaultMarginTop = css`
  margin: 80px 0 80px 0;
`;

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

const ButtonStyle = {
  width: '100%',
  boxSizing: 'border-box',
  position: 'absolute',
  bottom: '0',
};

const DiaryCreatePage = () => {
  return (
    <DefaultContainer>
      <Header
        leftComponent={leftHeaderContent()}
        centerComponent={centerHeaderContent()}
      />

      <ProgressBar css={DefaultMarginTop} totalStep={3} currentStep={1} />

      <DiaryCreateStepOne />

      <Button
        mode="primary"
        style={{ ...ButtonStyle }}
        onClick={() => console.log('clickTest')}
      >
        다음
      </Button>
    </DefaultContainer>
  );
};

export default DiaryCreatePage;
