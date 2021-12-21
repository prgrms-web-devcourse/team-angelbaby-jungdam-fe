import React, { useState, useEffect } from 'react';
import DefaultContainer from '@styles/DefaultContainer';
import styled from '@emotion/styled';
import { StoryBookDiaryListContainer } from '@components/domain/StoryBookDiaryList';
import { Skeleton } from '@components/base';
import { StoryBookDiaryList, DetailPageHeader } from '@components/domain';
import { getStoryBookDetail } from '@api/storyBookApi';
import { useNavigate, useParams } from 'react-router';

const StoryBookDetailPageContainer = styled(DefaultContainer)`
  height: auto;
  padding: 38px 0 0;
  box-sizing: content-box;
`;

const ObserverBox = styled.div`
  width: 100%;
  height: 100px;
`;

const StoryBookDetailPage = () => {
  const [target, setTarget] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { albumId, participantId } = useParams();
  const [storybookDetail, setStorybookDetail] = useState({
    hasNext: true,
    participantId: '',
    participantNickname: '',
    participantAvatar: '',
    diaries: [],
  });

  const navigate = useNavigate();

  const renderSkeleton = () => {
    let list = [];
    for (let i = 0; i < 8; i++) {
      list.push(<Skeleton.Box width={'100%'} height={'100%'} />);
    }
    return list;
  };

  const renderStoryBookDiary = async (cursorId) => {
    setIsLoading(true);
    try {
      if (!cursorId) {
        const {
          data: { data },
        } = await getStoryBookDetail({ albumId, participantId });
        setStorybookDetail((prev) => ({ ...prev, ...data }));
      } else {
        const {
          data: { data },
        } = await getStoryBookDetail({ albumId, participantId, cursorId });
        setStorybookDetail((prev) => ({
          ...data,
          diaries: [...prev.diaries, ...data.diaries],
        }));
      }
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };

  const onIntersect = ([entry]) => {
    if (
      entry.isIntersecting &&
      !isLoading &&
      storybookDetail.hasNext &&
      storybookDetail.diaries.length > 0
    ) {
      const { id } =
        storybookDetail.diaries[storybookDetail.diaries.length - 1];
      renderStoryBookDiary(id);
    }
  };

  useEffect(() => {
    renderStoryBookDiary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, isLoading]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <StoryBookDetailPageContainer>
        <DetailPageHeader
          handleGoBack={handleGoBack}
          pageTitle={`'${storybookDetail.participantNickname}' 님의 스토리북`}
        />
        <StoryBookDiaryList
          diaryList={storybookDetail.diaries}
          albumId={albumId}
        />
      </StoryBookDetailPageContainer>
      {isLoading && (
        <StoryBookDiaryListContainer>
          {renderSkeleton()}
        </StoryBookDiaryListContainer>
      )}
      {storybookDetail.hasNext && <ObserverBox ref={setTarget} />}
    </>
  );
};

export default StoryBookDetailPage;
