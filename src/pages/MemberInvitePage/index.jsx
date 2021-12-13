import React, { useState } from 'react';
import styled from '@emotion/styled';
import DefaultContainer from '@styles/DefaultContainer';
import color from '@assets/colors';
import font from '@assets/fonts';
import { Input, Button, Icon, Spinner, Avatar, Modal } from '@components/base';
import { DetailPageHeader } from '@components/domain';
import { useForm } from '@hooks';

const DUMMY_DATA = [
  {
    username: '테스트1',
    email: 'test1@gmail.com',
    avatar: 'https://picsum.photos/300/600',
  },
  {
    username: '테스트2',
    email: 'test2@gmail.com',
    avatar: 'https://picsum.photos/300/600',
  },
  {
    username: '테스트3',
    email: 'test3@gmail.com',
    avatar: 'https://picsum.photos/300/600',
  },
];

const MemberInvitePageWrapper = styled(DefaultContainer)`
  width: 100%;
  padding-top: 60px;
  position: relative;
  ${font.content_16}
`;

const SearchWrapper = styled.form`
  display: flex;
  margin-bottom: 24px;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border: 1px solid ${color.grey_50};
  border-radius: 15px;
  padding: 8px;
  gap: 16px;
  background-color: ${({ isToggle }) => (isToggle ? color.brown : color.white)};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  > span {
    color: ${({ isToggle }) => (isToggle ? color.white : color.black)};
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
`;

const MemberInvitePage = () => {
  const [searchInfo, setSearchInfo] = useState([]);
  const [ModalVisible, setModalVisible] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const { values, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
    },
    onSubmit: async () => {
      const ans = DUMMY_DATA.filter((data) => {
        return data.email.includes(values.email);
      });
      setSearchInfo(ans);
    },
  });

  const searchUserList = (list) =>
    list.map(({ username, email, avatar }) => (
      <UserWrapper onClick={onToggle} isToggle={isToggle}>
        <Avatar size="medium" src={avatar} />
        <TextWrapper isToggle={isToggle}>
          <span>{username}</span>
          <span>{email}</span>
        </TextWrapper>
      </UserWrapper>
    ));

  const onToggle = async (e) => {
    setIsToggle((state) => !state);
  };

  const OpenModal = () => {
    setModalVisible(true);
  };

  const CloseModal = () => {
    if (ModalVisible) {
      setModalVisible(false);
    }
  };

  return (
    <MemberInvitePageWrapper>
      <DetailPageHeader pageTitle="초대하기" />
      <SearchWrapper onSubmit={handleSubmit}>
        <Input
          name="email"
          onChange={handleChange}
          placeholder="찾을 멤버의 이메일을 입력해주세요."
        ></Input>
        <Button onClick={handleSubmit}>
          <Icon name="carbon:search" color={color.brown} />
        </Button>
      </SearchWrapper>
      {isLoading && <Spinner isLoading={isLoading} />}
      {searchUserList(searchInfo)}
      <ButtonWrapper>
        <Button mode="primary" onClick={OpenModal}>
          초대하기
        </Button>
      </ButtonWrapper>
      {searchInfo.length === 0 ? (
        <Modal visible={ModalVisible} onClose={CloseModal} selectable={false}>
          초대할 인원이 없습니다.
        </Modal>
      ) : (
        <Modal visible={ModalVisible} onClose={CloseModal}>
          총 {searchInfo.length}명의 인원을 초대하시겠습니까?
        </Modal>
      )}
    </MemberInvitePageWrapper>
  );
};

export default MemberInvitePage;
