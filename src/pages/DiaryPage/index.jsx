import React from 'react';
import { css } from '@emotion/react';
import {
  Header,
  DiaryHeaderInfo,
  DiaryImages,
  DiaryContent,
  DiaryComment,
  DiaryCommentInputForm,
} from '@components/domain';
import { Button, Icon } from '@components/base';
import DefaultContainer from '@styles/DefaultContainer';
import color from '@assets/colors';
import { useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import usePromise from '@hooks/usePromise';
import { getDiaryContents } from '@api/getDiaryContents';
import { getDiaryComments } from '@api/getDiaryComments';
import styled from '@emotion/styled';
import useForm from '@hooks/useForm';

const ContainerStyle = css`
  margin-top: 38px;
  overflow-y: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Divider = styled.hr`
  display: block;
  width: 100%;
  border: solid 0.5px ${color.grey};
  background-color: ${color.grey};
`;

const DiaryPage = () => {
  const { albumId, diaryId } = useParams();
  const cursorId = useRef('');

  const [loadingFetchDiaryContents, fetchDiaryContents] = usePromise(() => {
    const data = {
      albumId,
      diaryId,
    };

    return getDiaryContents(data);
  }, [albumId, diaryId]);
  const [loadingFetchDiaryComments, fetchDiaryComments] = usePromise(() => {
    const data = {
      albumId,
      diaryId,
      cursorId: cursorId.current,
      size: 10,
    };

    return getDiaryComments(data);
  }, [albumId, diaryId, cursorId]);

  const profile = useSelector((state) => state.member.data.memberAvatar);
  const scrollRef = useRef(null);

  const { values, handleChange } = useForm({
    initialValues: {
      createComment: '',
    },
  });

  const { createComment } = values;

  useEffect(() => {
    const detectMobileKeyboard = () => {
      scrollRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    };

    window.addEventListener('resize', detectMobileKeyboard);

    return () => window.removeEventListener('resize', detectMobileKeyboard);
  }, []);

  const leftHeaderContent = useCallback(() => {
    return (
      <Button>
        <Icon name="ep:back" color={color.brown} />
      </Button>
    );
  }, []);

  if (loadingFetchDiaryContents || loadingFetchDiaryComments) {
    return <div>loading</div>;
  }

  if (!fetchDiaryContents || !fetchDiaryComments) {
    return null;
  }

  const { title, bookmark, recordedAt, diaryPhotos, content } =
    fetchDiaryContents;
  const { comments, hasNext, lastCommentId } = fetchDiaryComments;
  cursorId.current = lastCommentId;

  return (
    <DefaultContainer css={ContainerStyle}>
      <Header leftComponent={leftHeaderContent()} />
      <DiaryHeaderInfo
        title={title}
        createdAt={recordedAt}
        bookmark={bookmark}
      />
      <DiaryImages images={diaryPhotos} />
      <DiaryContent content={content} />
      {comments.length !== 0 && <Divider />}
      <DiaryComment comments={comments} ref={scrollRef} hasNext={hasNext} />
      <DiaryCommentInputForm
        profile={profile}
        onChange={handleChange}
        value={createComment}
      />
    </DefaultContainer>
  );
};

export default DiaryPage;
