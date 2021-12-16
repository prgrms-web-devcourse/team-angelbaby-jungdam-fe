import styled from 'styled-components';
import DefaultContainer from '@styles/DefaultContainer';
import font from '@assets/fonts';
import { Icon, Divider } from '@components/base';
import { OnlyInfoHeader, UserCard } from '@components/domain';
import { useNavigate } from 'react-router-dom';

const DUMMY_DATA = [
  {
    nickname: 'test1',
    avatar: 'https://picsum.photos/300/600',
    role: 'OWNER',
  },
  {
    nickname: 'test2',
    avatar: 'https://picsum.photos/300/600',
    role: 'MEMBER',
  },
  {
    nickname: 'test3',
    avatar: '',
    role: 'MEMBER',
  },
];

const MemberListPageContainer = styled(DefaultContainer)`
  width: 100%;
  padding-top: 60px;
  ${font.content_16}
`;

const ToInvitePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
`;

const InviteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MemberListWrapper = styled.div`
  margin-top: 78px;
`;

const MemberListTitle = styled.div`
  height: 32px;
  ${font.heading_20}
`;

const MemberListPage = () => {
  const navigate = useNavigate();

  const handleToInvite = (e) => {
    navigate('invite');
  };

  const memberList = (list) =>
    list.map(({ nickname, avatar, role }, index) => (
      <UserCard nickname={nickname} avatar={avatar} role={role} key={index} />
    ));

  return (
    <MemberListPageContainer>
      <OnlyInfoHeader pageTitle="멤버 리스트" />
      <ToInvitePage onClick={handleToInvite}>
        <InviteWrapper>
          <Icon name="octicon:person-add-24" />
          멤버 초대하기
        </InviteWrapper>
        <Icon name="octicon:chevron-right-24" />
      </ToInvitePage>
      <Divider size={4} />
      <MemberListWrapper>
        <MemberListTitle>멤버</MemberListTitle>
        <Divider size={4} />
        {memberList(DUMMY_DATA)}
      </MemberListWrapper>
    </MemberListPageContainer>
  );
};

export default MemberListPage;
