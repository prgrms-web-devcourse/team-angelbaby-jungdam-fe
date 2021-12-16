import React, { useState } from 'react';
import styled from '@emotion/styled';
import font from '@assets/fonts';
import color from '@assets/colors';
import { useDispatch } from 'react-redux';
import { postImageUploads } from '@api/commonApi';
import { putMember } from '@api/memberApi';
import { Avatar, Skeleton, Upload } from '@components/base';
import { css } from '@emotion/react';
import { member } from '@redux/member';

const ProfileCardContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ProfileContent = styled.div`
  flex: 1;
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`;

const ProfileEmail = styled.span`
  color: ${color.grey};
  ${font.content_14};
  margin-bottom: 16px;
`;

const ProfileName = styled.h2`
  color: ${color.black};
  ${font.heading_20};
`;

const buttonStyle = css`
  justify-content: flex-start;
  ${font.content_12};
`;

const ProfileCard = ({
  data: { memberAvatar, memberNickname, memberEmail = '' },
}) => {
  const dispatch = useDispatch();
  const { setMemberInfo } = member.actions;
  const [isLoading, setIsLoading] = useState(false);
  const handleProfileImageUpload = async (file) => {
    try {
      // 멤버 정보 수정 API 호출
      const image = await postImageUploads(file);
      return image;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEditProfile = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    const imageUrl = await handleProfileImageUpload(file);
    try {
      // 멤버 정보 수정 API 호출
      const {
        data: { data },
      } = await putMember({
        nickname: memberNickname,
        avatar: imageUrl,
      });
      dispatch(
        setMemberInfo({
          memberNickname: data.nickname,
          memberAvatar: data.avatar,
        }),
      );
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <ProfileCardContainer>
      {isLoading ? (
        <Skeleton.Circle size={80} />
      ) : (
        <Avatar src={memberAvatar} size="large" />
      )}
      <ProfileContent>
        <ProfileName>{memberNickname}</ProfileName>
        <ProfileEmail>{memberEmail}</ProfileEmail>
        <Upload
          name="memberAvatar"
          onChange={handleEditProfile}
          css={buttonStyle}
        >
          프로필 사진 편집
        </Upload>
      </ProfileContent>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
