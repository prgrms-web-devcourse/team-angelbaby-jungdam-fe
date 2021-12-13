import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  DiaryCreateStepOne,
  DiaryCreateStepTwo,
  DiaryCreateStepThree,
} from '@components/domain';
import { Button, Icon, ProgressBar } from '@components/base';
import font from '@assets/fonts';
import color from '@assets/colors';
import DefaultContainer from '@styles/DefaultContainer';

const DefaultMarginTop = css`
  margin: 80px 0 80px 0;
`;

const ButtonStyle = {
  width: '100%',
  boxSizing: 'border-box',
  position: 'absolute',
  bottom: '0',
};

const DiaryCreatePage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    setStep(() => step + 1);
  };

  const handlePrevButtonClick = () => {
    if (step === 1) {
      navigate('../diary');
    } else {
      setStep(() => step - 1);
    }
  };

  const leftHeaderContent = () => {
    return (
      <>
        <Button>
          <Icon
            name="ep:back"
            color={color.brown}
            onClick={handlePrevButtonClick}
          />
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

  const renderDiaryCreateForm = () => {
    if (step === 1) {
      return <DiaryCreateStepOne />;
    } else if (step === 2) {
      return <DiaryCreateStepTwo />;
    } else if (step === 3) {
      console.log(step);
      return <DiaryCreateStepThree />;
    }
  };

  return (
    <DefaultContainer>
      <Header
        leftComponent={leftHeaderContent()}
        centerComponent={centerHeaderContent()}
      />

      <ProgressBar css={DefaultMarginTop} totalStep={3} currentStep={step} />

      {renderDiaryCreateForm()}

      <Button
        mode="primary"
        style={{ ...ButtonStyle }}
        onClick={handleNextButtonClick}
      >
        다음
      </Button>
    </DefaultContainer>
  );
};

export default DiaryCreatePage;
