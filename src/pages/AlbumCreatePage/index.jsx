import React, { useState } from 'react';
import { DetailPageHeader } from '@components/domain';
import { BottomFloatButton, ProgressBar, Spinner } from '@components/base';
import { postAlbums } from '@api/albumApi';
import { postImageUploads } from '@api/commonApi';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import color from '@assets/colors';
import font from '@assets/fonts';
import DefaultContainer from '@styles/DefaultContainer';
import AlbumCreateStep1 from './AlbumCreateStep1';
import AlbumCreateStep2 from './AlbumCreateStep2';
import AlbumCreateStep3 from './AlbumCreateStep3';
import { useNavigate } from 'react-router';

const ALBUM_PROGRESS_VALUE = {
  currentStep: 1,
  totalStep: 4,
};

const FormTitle = [
  '앨범 명을 지정해주세요.',
  '가훈을 적어주세요.',
  '가족 사진을 지정해주세요.',
  '다했어요! 이제 추억을 기록해볼까요?',
];

export const AlbumCreatePageHeader = styled.h1`
  margin: 15px 0;
  color: ${color.black};
  white-space: pre-wrap;
  ${font.heading_20};
`;

export const errorMsg = css`
  margin-top: 16px;
  color: red;
  ${font.content_14};
`;

export const borderColor = css`
  border-color: ${color.grey_50};
`;

const AlbumCreatePageContainer = styled(DefaultContainer)`
  padding-top: 40px; // Header height
`;

const AlbumContentContainer = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const AlbumCreatePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(ALBUM_PROGRESS_VALUE.currentStep);
  const [formData, setFormData] = useState({
    albumName: '',
    albumMotto: '',
    albumImageFile: null,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target) {
      // Data
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      setErrors({});
    } else {
      // File
      setFormData({
        ...formData,
        albumImageFile: e,
      });
      setErrors({});
    }
  };

  const handleNextstep = () => {
    setErrors({});
    setStep((step) => step + 1);
  };

  const handleCreateAlbum = (step) => {
    if (step !== ALBUM_PROGRESS_VALUE.totalStep) {
      switch (step) {
        case 1:
          !formData.albumName
            ? setErrors({
                albumName: '앨범 명을 입력해주세요.',
              })
            : handleNextstep();
          break;
        case 2:
          !formData.albumMotto
            ? setErrors({
                albumMotto: '가훈을 입력해주세요.',
              })
            : handleNextstep();
          break;
        case 3:
          !formData.albumImageFile
            ? setErrors({
                albumImageFile: '사진을 선택해주세요.',
              })
            : handleNextstep();
          break;
        default:
          break;
      }
    } else {
      // Create Album
      createAlbum();
    }
  };

  const createAlbum = async () => {
    setIsLoading(true);
    const imageUrl = await postImageUploads(formData.albumImageFile);
    try {
      const {
        data: { data },
      } = await postAlbums({
        familyMotto: formData.albumMotto,
        thumbnail: imageUrl,
        title: formData.albumName,
      });
      setIsLoading(false);

      // Redirect to Album Detail Page
      navigate(`/album/${data.id}`);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleBackStep = () => {
    setStep((step) => step !== 1 && step - 1);
    if (step === 1) {
      navigate(-1);
    }
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
            errors={errors}
          />
        );
      case 2:
        return (
          <AlbumCreateStep2
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <AlbumCreateStep3
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 4:
        return <></>;
      default:
        return null;
    }
  };

  return (
    <>
      <DetailPageHeader
        handleGoBack={handleBackStep}
        handleClose={handleClose}
        pageTitle={''}
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
      {isLoading ? (
        <Spinner />
      ) : (
        <BottomFloatButton onClick={() => handleCreateAlbum(step)}>
          {step !== 4 ? '다음' : '완료'}
        </BottomFloatButton>
      )}
    </>
  );
};
export default AlbumCreatePage;
