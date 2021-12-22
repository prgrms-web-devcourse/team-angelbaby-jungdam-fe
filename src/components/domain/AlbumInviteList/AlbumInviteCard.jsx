import React from 'react';
import color from '@assets/colors';
import font from '@assets/fonts';
import { Button, Icon } from '@components/base';
import { putInvitations } from '@api/albumApi';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { fetchInvitations } from '@redux/album';

const AlbumInviteCardContainer = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  width: 100%;
  height: 25px;
  box-shadow: 1px 1px 2px 0px ${color.black_30};
  border: 1px solid ${color.grey_50};
  padding: 2px 4px;
  box-sizing: border-box;
  margin-bottom: 4px;
  ${font.content_12};
`;

const AlbumLeft = styled.div`
  display: inline-flex;
  gap: 5px;
  align-items: center;
`;
const AlbumRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

const AlbumTitle = styled.h3`
  display: inline-block;
  ${font.content_14};
`;

const AlbumInvite = styled.span`
  font-size: 10px;
  color: ${color.black_70};
`;

const AlbumInviteCard = ({ invitationId, albumTitle, invitationCreatedAt }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCancel = async ({ invitationId }) => {
    //   dispatch 초대 invite 리스트 삭제 구현
    try {
      await putInvitations({ invitationId, status: 'REJECT' });
      alert('삭제 완료');
      dispatch(fetchInvitations());
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleApprove = async ({ invitationId }) => {
    //   dispatch 초대 invite 리스트 수락 구현
    try {
      const {
        data: { data },
      } = await putInvitations({ invitationId, status: 'ACCEPT' });
      alert('수락 완료');
      dispatch(fetchInvitations());
      navigate(`/album/${data.albumId}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AlbumInviteCardContainer>
      <AlbumLeft>
        <Icon name="flat-color-icons:invite" height={14} />
        <AlbumTitle>'{albumTitle}'</AlbumTitle>에서 초대 요청
        <AlbumInvite>{invitationCreatedAt}</AlbumInvite>
      </AlbumLeft>
      <AlbumRight>
        <Button onClick={() => handleApprove({ invitationId })}>
          <Icon name="emojione:white-heavy-check-mark" height={16} />
        </Button>
        <Button onClick={() => handleCancel({ invitationId })}>
          <Icon name="bx:bxs-x-circle" height={18} />
        </Button>
      </AlbumRight>
    </AlbumInviteCardContainer>
  );
};

export default AlbumInviteCard;
