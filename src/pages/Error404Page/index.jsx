import React from 'react';
import { Lottie, Button } from '@components/base';
import DefaultContainer from '@styles/DefaultContainer';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import font from '@assets/fonts';
import color from '@assets/colors';

const Error404PageContainer = styled(DefaultContainer)`
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.h1`
  color: ${color.brown};
  ${font.heading_20};
  text-align: center;
  margin: 20px 0;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: ${color.black};
  display: block;
  width: 100%;
`;

const Error404Page = () => {
  return (
    <Error404PageContainer>
      <Lottie height={'45%'} animationData={'404'} />
      <ErrorText>
        잘못 된 페이지에요.
        <br />
        메인으로 가시겠어요?
      </ErrorText>
      <StyleLink to="/album">
        <Button mode="primary">메인으로 가기</Button>
      </StyleLink>
    </Error404PageContainer>
  );
};

export default Error404Page;
