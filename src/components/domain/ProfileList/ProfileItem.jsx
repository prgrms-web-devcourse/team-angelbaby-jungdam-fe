import React, { useState, useRef, useEffect } from 'react';
import color from '@assets/colors';
import font from '@assets/fonts';
import { putMember } from '@api/memberApi';
import { Button, Input } from '@components/base';
import { useDispatch } from 'react-redux';
import { member } from '@redux/member';
import styled from '@emotion/styled';

const ProfileListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${color.black};
  ${font.content_12};
`;

const ProfileListItemTitle = styled.span`
  width: 100px;
  color: ${color.black};
`;
const ProfileListItemContent = styled.span`
  flex: 1;
  color: ${color.black};
`;
const ProfileListItemEditorButton = styled(Button)`
  color: ${color.black};
`;

const inputStyle = {
  flex: '1',
  fontSize: '10px',
  padding: '0',
  border: 'none',
};

const ProfileItem = ({
  handleClick = () => {},
  item: { dataName, title, content, isEditable },
  memberAvatar,
}) => {
  const dispatch = useDispatch();
  const { setMemberInfo } = member.actions;
  const [edited, setEdited] = useState(false);
  const [inputValue, setInputValue] = useState(content);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // edited 상태 변화 시 input 포커스 이동
    if (edited) {
      ref.current.focus();
    }
  }, [edited]);

  const onClickEditorButton = async (state) => {
    setIsLoading(true);
    console.log(state);
    if (!state) {
      try {
        // 멤버 정보 수정 API 호출
        const {
          data: { data },
        } = await putMember({
          avatar: memberAvatar,
          [dataName]: inputValue,
        });
        dispatch(
          setMemberInfo({
            memberAvatar: data.avatar,
            memberNickname: data.nickname,
          }),
        );
        console.log(`${dataName} : ${inputValue}`);
      } catch (error) {}
    }
    setIsLoading(false);
    setEdited(state);
  };

  return (
    <ProfileListItem onClick={handleClick || ''}>
      <ProfileListItemTitle>{title}</ProfileListItemTitle>
      {edited ? (
        <Input
          size={'sm'}
          name={dataName}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`${title}`}
          style={inputStyle}
          ref={ref}
        />
      ) : (
        <ProfileListItemContent>{content}</ProfileListItemContent>
      )}
      {isEditable &&
        (edited ? (
          <ProfileListItemEditorButton
            onClick={() => onClickEditorButton(false)}
          >
            완료
          </ProfileListItemEditorButton>
        ) : (
          <ProfileListItemEditorButton
            onClick={() => onClickEditorButton(true)}
          >
            편집
          </ProfileListItemEditorButton>
        ))}
    </ProfileListItem>
  );
};

export default ProfileItem;
