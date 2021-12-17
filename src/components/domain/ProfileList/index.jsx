import React from 'react';
import color from '@assets/colors';
import font from '@assets/fonts';
import { Divider } from '@components/base';
import styled from '@emotion/styled';
import ProfileItem from './ProfileItem';
import { useNavigate } from 'react-router';

const PROFILE_HEADER_NAME = '내 정보';
const SERVICE_HEADER_NAME = '서비스 정보';

const ProfileListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const ProfileListHeader = styled.h3`
  color: ${color.black};
  ${font.heading_20};
  padding-bottom: 4px;
  margin-bottom: 12px;
  border-bottom: 1px solid ${color.black};
`;
const ProfileList = ({
  data: { memberNickname, memberEmail, memberAvatar },
}) => {
  const PROFILE_INFO_LIST = [
    {
      dataName: 'memberNickEmail',
      title: '이메일',
      content: memberEmail ? memberEmail : '',
      isEditable: false,
    },
    {
      dataName: 'nickname',
      title: '닉네임',
      content: memberNickname,
      isEditable: true,
    },
  ];

  return (
    <ProfileListContainer>
      <ProfileListHeader>{PROFILE_HEADER_NAME}</ProfileListHeader>
      {PROFILE_INFO_LIST.map((item) => (
        <div key={item.title}>
          <ProfileItem item={item} memberAvatar={memberAvatar} />
          <Divider size={12} />
        </div>
      ))}
    </ProfileListContainer>
  );
};

export default ProfileList;

export const ServiceInfoList = () => {
  const navigate = useNavigate();

  const SERVICE_INFO_LIST = [
    {
      title: 'App Version',
      content: '1.0.0',
    },
    {
      title: '문의 사항',
      onClick: () => {
        navigate('/inquiry');
      },
    },
    {
      title: '서비스 이용 약관',
      onClick: () => {
        navigate('/service-terms');
      },
    },
    {
      title: '로그아웃',
      onClick: () => {
        alert('미구현');
      },
    },
  ];

  return (
    <ProfileListContainer>
      <ProfileListHeader>{SERVICE_HEADER_NAME}</ProfileListHeader>
      {SERVICE_INFO_LIST.map((item) => (
        <div key={item.title}>
          <ProfileItem item={item} handleClick={item.onClick} />
          <Divider size={12} />
        </div>
      ))}
    </ProfileListContainer>
  );
};
