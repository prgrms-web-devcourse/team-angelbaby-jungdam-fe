import styled from 'styled-components';
import DefaultContainer from '@styles/DefaultContainer';
import color from '@assets/colors';
import font from '@assets/fonts';
import { Icon } from '@components/base';
import { OnlyInfoHeader } from '@components/domain';

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
  border-bottom: 1px solid ${color.grey_50};
`;

const InviteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MemberListWrapper = styled.div`
  margin-top: 78px;
  border-bottom: 1px solid ${color.grey_50};
`;

const MemberListTitle = styled.div`
  height: 32px;
  ${font.heading_20}
`;

const MemberListPage = () => {
  return (
    <MemberListPageContainer>
      <OnlyInfoHeader pageTitle="멤버 리스트" />
      <ToInvitePage>
        <InviteWrapper>
          <Icon name="octicon:person-add-24" height="24" />
          멤버 초대하기
        </InviteWrapper>
        <Icon name="octicon:chevron-right-24" height="24" />
      </ToInvitePage>
      <MemberListWrapper>
        <MemberListTitle>멤버</MemberListTitle>
        {/* UserCard 도메인이 들어갈 구역 */}
      </MemberListWrapper>
    </MemberListPageContainer>
  );
};

export default MemberListPage;
