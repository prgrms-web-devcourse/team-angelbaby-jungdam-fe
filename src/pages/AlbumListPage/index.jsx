import React, { useEffect } from 'react';
import DefaultContainer from '@styles/DefaultContainer';
import font from '@assets/fonts';
import color from '@assets/colors';
import styled from '@emotion/styled';
import { Button, BottomFloatButton, Icon } from '@components/base';
import { Link } from 'react-router-dom';
import {
  ServiceInfoHeader,
  AlbumInviteList,
  AlbumSwiper,
} from '@components/domain';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInvitations } from '@redux/album';

const AlbumListPageContainer = styled(DefaultContainer)`
  padding-top: 50px;
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

const Subtitle = styled.h2`
  color: ${color.black};
  ${font.heading_20};
`;

const AlbumListPage = () => {
  const {
    data: { memberAvatar },
  } = useSelector((state) => state.member);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvitations());
  }, [dispatch]);

  return (
    <>
      <ServiceInfoHeader src={memberAvatar} />
      <AlbumListPageContainer>
        <SubHeader>
          <Subtitle>주디님의 초대 목록</Subtitle>
        </SubHeader>
        <AlbumInviteList />
        <SubHeader>
          <Subtitle>주디님의 앨범 목록</Subtitle>
          <Button mode="border">
            <Icon name="ant-design:plus-outlined" height={10} />
            추가하기
          </Button>
        </SubHeader>
        <AlbumSwiper />
      </AlbumListPageContainer>
      <Link to="new">
        <BottomFloatButton>그룹 생성하기</BottomFloatButton>
      </Link>
    </>
  );
};

export default AlbumListPage;
