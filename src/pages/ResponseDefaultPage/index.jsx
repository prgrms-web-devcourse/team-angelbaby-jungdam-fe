import React from 'react';
import styled from '@emotion/styled';
import color from '@assets/colors';
import font from '@assets/fonts';
import { ReactComponent as Logo } from '@assets/Image/Logo.svg';
const ResponseDefaultPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e4e4;
  width: 750px;
  height: 750px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ResponseText = styled.h1`
  text-align: center;
  color: ${color.brown};
  ${font.heading_24};
  margin-bottom: 24px;
`;

const ResponseSizeText = styled.h2`
  color: ${color.brown};
  ${font.heading_20};
  text-align: center;
  margin-bottom: 24px;

  &.strong {
    color: ${color.black};
    ${font.heading_24};
  }
`;

const styleLogo = {
  width: '30%',
  height: '30%',
};

const ResponseDefaultPage = ({ resizing }) => {
  return (
    <ResponseDefaultPageContainer>
      <InnerContainer>
        <Logo style={styleLogo} />
        <ResponseText>
          가족과 함께하는 공유 일기 서비스, 정담
          <br />
        </ResponseText>
        <ResponseSizeText>
          🥲죄송합니다. 저희 서비스는 모바일 환경만 지원합니다. (550px)
        </ResponseSizeText>
        <ResponseSizeText className="strong">
          현재 사이즈 값은? {resizing}px
        </ResponseSizeText>
      </InnerContainer>
    </ResponseDefaultPageContainer>
  );
};

export default ResponseDefaultPage;
