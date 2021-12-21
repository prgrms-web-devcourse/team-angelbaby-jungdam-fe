import React from 'react';
import DefaultContainer from '@styles/DefaultContainer';
import styled from '@emotion/styled';
import {
  DetailPageHeader,
  Profile,
  ProfileList,
  ServiceInfoList,
} from '@components/domain';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ProfilePageContainer = styled(DefaultContainer)`
  height: auto;
  padding: 38px 0 0;
  box-sizing: content-box;
`;

const ProfilePage = () => {
  const { data } = useSelector((state) => state.member);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/album');
  };

  return (
    <>
      <DetailPageHeader pageTitle="개인 정보" handleGoBack={handleGoBack} />
      <ProfilePageContainer>
        <Profile data={data} />
        <ProfileList data={data} />
        <ServiceInfoList />
      </ProfilePageContainer>
    </>
  );
};

export default ProfilePage;
