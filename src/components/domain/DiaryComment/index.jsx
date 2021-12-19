import styled from '@emotion/styled';
import font from '@assets/fonts';
import color from '@assets/colors';
import { forwardRef } from 'react';
import { Icon } from '@components/base';
import { useSelector } from 'react-redux';

const Conatainer = styled.div`
  padding-top: 20px;
`;

const Article = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Avatar = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.span`
  display: inline-block;
  margin-bottom: 2px;
  ${() => font.content_16};
`;

const Comment = styled.span`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  ${() => font.content_12};
`;

const Paragraph = styled.p`
  margin-bottom: 0.025px;
`;

const Delete = styled.button`
  position: absolute;
  right: 0;
  border: solid 1px black;
  outline: none;
  border: none;
  background: none;
`;

const DiaryComment = forwardRef(({ comments }, ref) => {
  const userInfo = useSelector((state) => state.member.data.memberEmail);

  return (
    <Conatainer ref={ref}>
      {comments.map(
        ({ commentId, avatar, nickname, commentContent, email }) => (
          <Article key={commentId}>
            <Avatar alt="images" src={avatar} />
            <CommentContainer>
              <UserInfo>{nickname}</UserInfo>
              <Comment>
                {commentContent.split('\n').map((line, index) => (
                  <Paragraph key={index}>{line}</Paragraph>
                ))}
              </Comment>
            </CommentContainer>
            {userInfo === email && (
              <Delete>
                <Icon name="fluent:delete-16-filled" color={color.grey} />
              </Delete>
            )}
          </Article>
        ),
      )}
    </Conatainer>
  );
});

export default DiaryComment;
