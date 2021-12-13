import React from 'react';
import styled from 'styled-components';
import { Avatar, Image, Button, Icon } from '@components/base';
import color from '@assets/colors';
import font from '@assets/fonts';
import Logo from '@assets/Image/Logo.svg';
import { useNavigate } from 'react-router';

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  z-index: 5;
  top: 0;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 32px 0 32px;
`;

const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ align }) => align};
`;

const HeadingContent = styled.span`
  ${font.heading_20}
  white-space: nowrap;
`;

const TextContent = styled.span`
  ${font.content_12}
  white-space: nowrap;
`;

const GroupWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 16px;
`;

const Header = ({
  leftComponent,
  centerComponent,
  rightComponent,
  ...props
}) => {
  return (
    <HeaderContainer {...props}>
      <HeaderContent align="left">{leftComponent}</HeaderContent>
      <HeaderContent align="center">{centerComponent}</HeaderContent>
      <HeaderContent align="right">{rightComponent}</HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

export const MainHeader = ({ groupTitle, familyMotto, role }) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Header
      leftComponent={
        <>
          <Button onClick={goBack}>
            <Icon name="ep:back" color={color.brown} />
          </Button>
          <TextWrapper>
            <HeadingContent>{groupTitle}</HeadingContent>
            <TextContent>{familyMotto}</TextContent>
          </TextWrapper>
        </>
      }
      rightComponent={
        <GroupWrapper>
          <Button>
            <Icon name="ci:search" color={color.brown} />
          </Button>
          {role === 'OWNER' ? (
            <Button>
              <Icon name="ci:settings-filled" color={color.brown} />
            </Button>
          ) : null}
        </GroupWrapper>
      }
    />
  );
};

export const ServiceInfoHeader = () => {
  return (
    <Header
      style={{ boxShadow: `0px 1px 4px rgba(100, 88, 71, 0.25)` }}
      leftComponent={<Image src={Logo} alt="logo" block width="38px" />}
      rightComponent={<Avatar />}
    />
  );
};

export const DetailPageHeader = ({ pageTitle, handleGoBack, handleClose }) => {
  return (
    <Header
      leftComponent={
        <Button onClick={handleGoBack}>
          <Icon name="ep:back" color={color.brown} />
        </Button>
      }
      centerComponent={<HeadingContent>{pageTitle}</HeadingContent>}
      rightComponent={
        <Button onClick={handleClose}>
          <Icon name="bx:bx-x" color={color.brown} height={20} />
        </Button>
      }
    />
  );
};

export const OnlyInfoHeader = ({ pageTitle }) => {
  return (
    <Header
      style={{ boxShadow: `0px 1px 4px rgba(100, 88, 71, 0.25)` }}
      leftComponent={<HeadingContent>{pageTitle}</HeadingContent>}
    />
  );
};
