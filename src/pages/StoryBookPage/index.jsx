import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import font from '@assets/fonts';
import color from '@assets/colors';
import DefaultContainer from '@styles/DefaultContainer';
import { getStoryBook } from '@api/storyBookApi';
import { Link } from 'react-router-dom';
import { Avatar, Button, Skeleton } from '@components/base';
import {
  OnlyInfoHeader,
  Navigation,
  StoryBookDiaryList,
} from '@components/domain';

const StoryBookPageContainer = styled(DefaultContainer)`
  height: auto;
  padding: 38px 0 70px;
  box-sizing: content-box;
`;

const StorybookSubHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0 12px;
`;

const StorybookSubHeaderLeft = styled.div`
  display: inline-flex;
  align-items: center;
`;

const StorybookSubHeader = styled.h2`
  margin-left: 8px;
  color: ${color.black};
  ${font.heading_20};
`;

const Default = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

const DefaultText = styled.h3`
  text-align: center;
  color: ${color.black};
  ${font.content_16};
`;

const buttonStyle = {
  width: '40px',
  height: '20px',
  fontSize: '10px',
  padding: '2px 4px',
  boxSizing: 'content-box',
};

const StoryBookPage = () => {
  const [storyBookDiaryList, setStoryBookDiaryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { albumId } = useParams();

  const fetchStoryBookList = useCallback(async () => {
    setIsLoading(true);
    try {
      const {
        data: { data },
      } = await getStoryBook({ albumId });
      setStoryBookDiaryList(data);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  }, [albumId]);

  useEffect(() => {
    fetchStoryBookList();
  }, [albumId, fetchStoryBookList]);

  const renderSkeleton = () => (
    <>
      <StorybookSubHeaderContainer>
        <StorybookSubHeaderLeft>
          <Skeleton.Circle size={40} />
          <StorybookSubHeader>
            <Skeleton.Box width={100} height={30} />
          </StorybookSubHeader>
        </StorybookSubHeaderLeft>
        <Skeleton.Box width={50} height={30} />
      </StorybookSubHeaderContainer>
      <StoryBookDiaryList isLoading={isLoading} />
    </>
  );

  const renderStoryBookList = (memberList) =>
    memberList.map(
      (
        { participantId, participantNickname, participantAvatar, diaries },
        index,
      ) =>
        diaries.length > 0 ? (
          <div key={participantId}>
            <StorybookSubHeaderContainer>
              <StorybookSubHeaderLeft>
                <Avatar src={participantAvatar} />
                <StorybookSubHeader>
                  {participantNickname}??? ????????????
                </StorybookSubHeader>
              </StorybookSubHeaderLeft>
              {diaries.length > 0 && (
                <Link to={`${participantId}`}>
                  <Button mode="border" style={buttonStyle}>
                    ?????? ??????
                  </Button>
                </Link>
              )}
            </StorybookSubHeaderContainer>
            <StoryBookDiaryList
              diaryList={diaries}
              albumId={albumId}
              isLoading={isLoading}
            />
          </div>
        ) : (
          index === memberList.length - 1 && (
            <Default>
              <DefaultText>
                ????????? ????????????.
                <br />
                ????????? ???????????? ?????????????
              </DefaultText>
            </Default>
          )
        ), // ????????? ????????? ??? ????????? ?????????,
    );

  return (
    <>
      <OnlyInfoHeader pageTitle="????????????" />
      <StoryBookPageContainer>
        {isLoading ? (
          <>{renderSkeleton()}</>
        ) : (
          <>{renderStoryBookList(storyBookDiaryList)}</>
        )}
      </StoryBookPageContainer>
      <Navigation />
    </>
  );
};

export default StoryBookPage;
