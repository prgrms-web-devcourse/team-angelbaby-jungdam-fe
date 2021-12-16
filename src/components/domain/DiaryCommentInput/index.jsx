import React from 'react';
import styled from '@emotion/styled';
import color from '@assets/colors';
import font from '@assets/fonts';
import { Button } from '@components/base';

const Container = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid ${color.grey};
  background-color: ${color.white};
`;

const Avatar = styled.img`
  margin-right: 10px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 28px;
  resize: none;
  border: none;
  color: ${color.black};
  outline: none;
  -ms-overflow-style: none;

  ${() => font.content_16};

  &::placeholder {
    color: ${color.grey};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonStyle = {
  marginLeft: '10px',
  width: '25%',
  height: '50%',
  borderRadius: '5px',
};

const DiaryCommentInput = ({ profile }) => {
  return (
    <Container>
      <Avatar alt="profile" src={profile} />
      <Textarea placeholder="댓글 작성..." />
      <Button mode="primary" style={ButtonStyle}>
        작성
      </Button>
    </Container>
  );
};

export default DiaryCommentInput;
