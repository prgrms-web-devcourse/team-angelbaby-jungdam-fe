import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import DefaultContainer from '@styles/DefaultContainer';
import color from '@assets/colors';
import font from '@assets/fonts';
import { Input, Button, Icon, Spinner, Avatar, Modal } from '@components/base';
import { DetailPageHeader } from '@components/domain';
import { useForm } from '@hooks';
import { searchUser } from '@api/searchUser';
import { inviteUser } from '@api/inviteUser';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

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
  margin-bottom: 8px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
`;

const SerchedListWrapper = styled.div`
  z-index: 999;
  position: absolute;
  top: 92px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${color.grey_50};
  width: 100%;
  padding: 14px;
  background-color: ${color.white};
  box-shadow: rgb(0 0 0 / 10%) 0px 12px 40px -12px;
  cursor: pointer;
`;

const LoadingtWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MemberInvitePage = () => {
  const inputref = useRef();
  const initialState = {
    memberId: 1,
    avatar: '',
    email: '',
    nickname: '',
  };
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchInfo, setSearchInfo] = useState(initialState);
  const { albumId } = useParams();
  const navigate = useNavigate();
  const { values, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
    },
    onSubmit: async () => {
      try {
        const {
          data: { data },
        } = await searchUser(albumId, values.email);
        setSearchInfo(data);
        setSearchVisible(true);
      } catch ({ response }) {
        const { data } = response;
        console.log(data);
        data.message === 'NOT_EXIST_MEMBER'
          ? alert('???????????? ???????????? ???????????? ?????? ??? ????????????.')
          : data.message === 'DUPLICATION_PARTICIPANT_IN_ALBUM'
          ? alert('?????? ????????? ???????????? ??????????????????.')
          : data.message === 'DUPLICATION_INVITATION_IN_ALBUM'
          ? alert('?????? ?????? ????????? ?????? ??????????????????.')
          : alert('????????? ??????????????????.');
        setSearchVisible(false);
      }
    },
  });

  const onSelectUser = () => {
    selectedUsers.findIndex((value) => value.email === searchInfo.email) ===
      -1 && setSelectedUsers((selectedUsers) => [...selectedUsers, searchInfo]);
    inputref.current.value = '';
    setSearchInfo(initialState);
    setSearchVisible(false);
  };

  const searchedUser = (list) => (
    <SerchedListWrapper onClick={onSelectUser}>
      <span>{list.nickname}</span>
      <span>{list.email}</span>
    </SerchedListWrapper>
  );

  const selectedUserList = (list) =>
    list.map(({ nickname, email, avatar }, index) => (
      <UserWrapper key={index}>
        <Avatar size="medium" src={avatar} />
        <TextWrapper>
          <span>{nickname}</span>
          <span>{email}</span>
        </TextWrapper>
      </UserWrapper>
    ));

  const goBack = () => {
    navigate('../');
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    if (modalVisible) {
      setModalVisible(false);
    }
  };

  const handleInvite = () => {
    selectedUsers.map(async ({ memberId }) => {
      try {
        await inviteUser(albumId, {
          targetMemberId: memberId,
        });
        alert('????????? ?????????????????????.');
        closeModal(false);
        goBack();
      } catch ({ response }) {
        const { data } = response;
        data.message =
          'DUPLICATION_INVITATION_IN_ALBUM' &&
          alert('?????? ?????? ????????? ?????? ????????? ???????????? ????????????.');
        closeModal(false);
      }
    });
  };

  return (
    <MemberInvitePageWrapper>
      <DetailPageHeader pageTitle="????????????" handleGoBack={goBack} />
      <SearchWrapper onSubmit={handleSubmit}>
        <>
          <Input
            name="email"
            onChange={handleChange}
            placeholder="?????? ????????? ???????????? ??????????????????."
            ref={inputref}
          />
          <Button onClick={handleSubmit}>
            <Icon name="carbon:search" color={color.brown} />
          </Button>
        </>
        {searchVisible && searchedUser(searchInfo)}
      </SearchWrapper>
      {selectedUserList(selectedUsers)}
      {isLoading && (
        <LoadingtWrapper>
          <Spinner isLoading={isLoading} size={24} />
        </LoadingtWrapper>
      )}
      <ButtonWrapper>
        <Button mode="primary" onClick={openModal}>
          ????????????
        </Button>
      </ButtonWrapper>
      {selectedUsers.length === 0 ? (
        <Modal visible={modalVisible} onClose={closeModal} selectable="confirm">
          ????????? ????????? ????????????.
        </Modal>
      ) : (
        <Modal
          visible={modalVisible}
          onClose={closeModal}
          selectable="primary"
          onSubmit={() => handleInvite()}
        >
          ??? {selectedUsers.length}?????? ????????? <br /> ?????????????????????????
        </Modal>
      )}
    </MemberInvitePageWrapper>
  );
};

export default MemberInvitePage;
