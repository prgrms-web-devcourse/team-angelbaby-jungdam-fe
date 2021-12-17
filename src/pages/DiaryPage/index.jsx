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
import { useState, useCallback, useLayoutEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getDiaryContents } from '@api/getDiaryContents';
import { getDiaryComments } from '@api/getDiaryComments';
import styled from '@emotion/styled';
import useForm from '@hooks/useForm';
import { postDiaryComment } from '@api/postDiaryComment';

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

  const { values, handleChange } = useForm({
    initialValues: {
      createComment: '',
    },
  });

  const { createComment } = values;

  const [state, setState] = useState({
    title: '',
    bookmark: '',
    recordedAt: '',
    diaryPhotos: [],
    content: '',
    comments: [],
    hasNext: '',
    lastCommentId: '',
  });

  useLayoutEffect(() => {
    const fetchContents = async () => {
      const data = await getDiaryContents({ albumId, diaryId });

      setState((state) => ({
        ...state,
        title: data.title,
        bookmark: data.bookmark,
        recordedAt: data.recordedAt,
        diaryPhotos: [...data.diaryPhotos],
        content: data.content,
      }));
    };

    const fetchComments = async () => {
      const body = {
        albumId,
        diaryId,
        cursorId: cursorId.current,
        size: 5,
      };

      const data = await getDiaryComments(body);

      setState((state) => ({
        ...state,
        comments: [...data.comments],
        hasNext: data.hasNext,
      }));

      cursorId.current = data.lastCommentId;
    };

    fetchContents();
    fetchComments();
  }, [albumId, diaryId]);

  const {
    title,
    bookmark,
    recordedAt,
    diaryPhotos,
    content,
    comments,
    hasNext,
  } = state;
  const profile = useSelector((state) => state.member.data.memberAvatar);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const detectMobileKeyboard = () => {
      scrollRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    };

    window.addEventListener('resize', detectMobileKeyboard);

    return () => window.removeEventListener('resize', detectMobileKeyboard);
  }, []);

  const handleCommentCreateClick = useCallback(async () => {
    try {
      const data = {
        albumId,
        diaryId,
        comment: {
          commentContent: values.createComment,
        },
      };

      await postDiaryComment(data);
    } catch (e) {
      console.log(e);
    }
  }, [albumId, diaryId, values.createComment]);

  const leftHeaderContent = useCallback(() => {
    return (
      <Button>
        <Icon name="ep:back" color={color.brown} />
      </Button>
    );
  }, []);

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
        value={createComment}
        onChange={handleChange}
        onClick={handleCommentCreateClick}
      />
    </DefaultContainer>
  );
};

export default DiaryPage;
