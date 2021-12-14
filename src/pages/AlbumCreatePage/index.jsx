import React, { useState } from 'react';
import { DetailPageHeader } from '@components/domain';
import { BottomFloatButton, ProgressBar } from '@components/base';
import color from '@assets/colors';
import font from '@assets/fonts';
import DefaultContainer from '@styles/DefaultContainer';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import AlbumCreateStep1 from './AlbumCreateStep1';
import AlbumCreateStep2 from './AlbumCreateStep2';
import AlbumCreateStep3 from './AlbumCreateStep3';
import { useNavigate } from 'react-router';

const ALBUM_PROGRESS_VALUE = {
  currentStep: 1,
  totalStep: 4,
};

export const AlbumCreatePageHeader = styled.h1`
  margin: 15px 0;
  color: ${color.black};
  white-space: pre-wrap;
  ${font.heading_20};
`;

export const borderColor = css`
  border-color: ${color.grey_50};
`;

const AlbumCreatePageContainer = styled(DefaultContainer)`
  padding-top: 26px; // Header height
`;

const AlbumContentContainer = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const AlbumCreatePage = () => {
  const navigate = useNavigate();
  const FormTitle = [
    '앨범 명을 지정해주세요.',
    '가훈을 적어주세요.',
    '가족 사진을 지정해주세요.',
    '다했어요! 이제 추억을 기록해볼까요?',
  ];
  const [step, setStep] = useState(ALBUM_PROGRESS_VALUE.currentStep);
  const [formData, setFormData] = useState({
    albumName: '',
    albumMotto: '',
    albumImageUrl: '',
    albumImageFile: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAlbum = (step) => {
    if (step !== 4) {
      // Next Create
      setStep((step) => step + 1);
    } else {
      alert('생성 완료');
    }
  };

  const handleBackStep = () => {
    setStep((step) => (step !== 1 ? step - 1 : step));
  };

  const handleClose = () => {
    navigate('/album');
  };

  const handleStepSwitch = (step) => {
    switch (step) {
      case 1:
        return (
          <AlbumCreateStep1
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <AlbumCreateStep2
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <AlbumCreateStep3
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        );
      case 4:
        return (
          <>
            <div>{formData.albumName}</div>
            <div>{formData.albumMotto}</div>
            <div>{formData.albumImageUrl}</div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <DetailPageHeader
        handleGoBack={handleBackStep}
        handleClose={handleClose}
      />
      <AlbumCreatePageContainer>
        <ProgressBar
          currentStep={step}
          totalStep={ALBUM_PROGRESS_VALUE.totalStep}
        />
        <AlbumContentContainer>
          <AlbumCreatePageHeader>{FormTitle[step - 1]}</AlbumCreatePageHeader>
          {handleStepSwitch(step)}
        </AlbumContentContainer>
      </AlbumCreatePageContainer>
      <BottomFloatButton onClick={() => handleCreateAlbum(step)}>
        {step !== 4 ? '다음' : '완료'}
      </BottomFloatButton>
    </>
  );
};
export default AlbumCreatePage;
