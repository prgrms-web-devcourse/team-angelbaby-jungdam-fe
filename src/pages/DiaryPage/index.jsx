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
import { Button, Icon, Modal } from '@components/base';
import DefaultContainer from '@styles/DefaultContainer';
import color from '@assets/colors';
import {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
  useRef,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getDiaryContents } from '@api/getDiaryContents';
import { getDiaryComments } from '@api/getDiaryComments';
import styled from '@emotion/styled';
import useForm from '@hooks/useForm';
import { postDiaryComment } from '@api/postDiaryComment';
import { deleteDiaryComment } from '@api/deleteDiaryComment';
import { putBookmark } from '@api/putBookmark';
import replaceTildeWithDate from '@utils/replaceTildeWithDate';
import { deleteDiary } from '@api/deleteDiary';

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
  const navigate = useNavigate();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [scrollType, setScrollType] = useState(null);

  const cursorId = useRef('');
  const createCommentInput = useRef(null);

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
  });

  useLayoutEffect(() => {
    const detectMobileKeyboard = () => {
      if (scrollType === 'Create') {
        scrollIntoCommentTop();
      }
    };

    window.addEventListener('resize', detectMobileKeyboard);

    return () => window.removeEventListener('resize', detectMobileKeyboard);
  }, [scrollType]);

  useEffect(() => {
    const fetchContents = async () => {
      const data = await getDiaryContents({ albumId, diaryId });

      setState((state) => ({
        ...state,
        title: data.title,
        bookmark: data.bookmark,
        recordedAt: replaceTildeWithDate(data.recordedAt),
        diaryPhotos: [...data.diaryPhotos],
        content: data.content,
        participant: { ...data.participant },
      }));
    };

    const fetchComments = async () => {
      const body = {
        albumId,
        diaryId,
        cursorId: cursorId.current,
        size: 15,
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
    participant,
  } = state;
  const profile = useSelector((state) => state.member.data.memberAvatar);
  const email = useSelector((state) => state.member.data.memberEmail);

  const scrollRef = useRef(null);

  const handleCommentCreateClick = useCallback(async () => {
    try {
      const data = {
        albumId,
        diaryId,
        comment: {
          commentContent: createComment,
        },
      };

      const newComment = await postDiaryComment(data);

      setState((state) => ({
        ...state,
        comments: [newComment].concat(...state.comments),
      }));

      setScrollType(() => 'Create');
      scrollIntoCommentTop();

      createCommentInput.current.value = '';
    } catch (e) {
      console.log(e);
    }
  }, [albumId, diaryId, createComment]);

  const handleCommentDeleteClick = useCallback(
    async (e) => {
      try {
        const commentId = e.target.closest('button').value;

        await deleteDiaryComment({ albumId, diaryId, commentId });

        setState((state) => ({
          ...state,
          comments: state.comments.filter(
            (comment) => comment.commentId !== Number(commentId),
          ),
        }));

        createCommentInput.current.value = '';
      } catch (e) {
        console.log(e.response.data.message);
      }
    },
    [albumId, diaryId],
  );

  const handleBookmarkClick = useCallback(async () => {
    try {
      await putBookmark({ albumId, diaryId });
      setState((state) => ({
        ...state,
        bookmark: !state.bookmark,
      }));
    } catch (e) {
      console.log(e.response.data.message);
    }
  }, [albumId, diaryId]);

  const onClickGoBack = useCallback(() => {
    navigate(`/album/${albumId}`);
  }, [navigate, albumId]);

  const onClickDiaryDelete = useCallback(async () => {
    try {
      const data = await deleteDiary({ albumId, diaryId });

      console.log(data);
      navigate(`/album/${albumId}`);
    } catch (e) {
      console.log(e.response.data.message);
    }
  }, [albumId, diaryId, navigate]);

  const OpenDeleteModal = () => {
    setDeleteModalVisible(true);
  };

  const CloseDeleteModal = () => {
    if (deleteModalVisible) {
      setDeleteModalVisible(false);
    }
  };

  const scrollIntoCommentTop = () => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const leftHeaderContent = useCallback(() => {
    return (
      <Button onClick={onClickGoBack}>
        <Icon name="ep:back" color={color.brown} />
      </Button>
    );
  }, [onClickGoBack]);

  if (!participant) return null;

  return (
    <DefaultContainer css={ContainerStyle}>
      <Header leftComponent={leftHeaderContent()} />
      <DiaryHeaderInfo
        title={title}
        createdAt={recordedAt}
        bookmark={bookmark}
        auth={participant.email === email}
        onBookmarkClick={handleBookmarkClick}
        onModal={OpenDeleteModal}
      />
      <DiaryImages images={diaryPhotos} />
      <DiaryContent content={content} />
      {comments.length !== 0 && <Divider />}
      <DiaryComment
        comments={comments}
        ref={scrollRef}
        hasNext={hasNext}
        userInfo={email}
        onDelete={handleCommentDeleteClick}
      />
      <DiaryCommentInputForm
        ref={createCommentInput}
        profile={profile}
        value={createComment}
        onChange={handleChange}
        onClick={handleCommentCreateClick}
      />
      <Modal
        selectable="primary"
        visible={deleteModalVisible}
        onSubmit={() => onClickDiaryDelete()}
        onClose={CloseDeleteModal}
      >
        정말로 일기를 <br />
        삭제하시겠습니까?
      </Modal>
    </DefaultContainer>
  );
};

export default DiaryPage;
