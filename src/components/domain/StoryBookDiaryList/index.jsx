import React from 'react';
import styled from '@emotion/styled';
import font from '@assets/fonts';
import color from '@assets/colors';
import { DimImage, Skeleton } from '@components/base';
import { Link } from 'react-router-dom';
export const StoryBookDiaryListContainer = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  display: flex;
  margin: -12px 0 0 -12px;
`;

const StoryBookItem = styled.li`
  width: 50%;
  height: 150px;
  padding: 12px 0 0 12px;
`;

const StoryBookDiaryTitle = styled.h3`
  color: ${color.white};
  ${font.content_16};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const StoryBookDiaryDateTime = styled.span`
  color: ${color.white};
  ${font.content_12};
`;

const DefaultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

const DefaultText = styled(StoryBookDiaryTitle)`
  color: ${color.black};
`;

const StoryBookDiaryList = ({ diaryList, ...props }) => {
  const { albumId, isLoading } = props;
  const renderSkeletonList = () => {
    const skeleton = [];
    for (let i = 0; i < 8; i++) {
      skeleton.push(
        <StoryBookItem key={i}>
          <Skeleton.Box width={'100%'} height={'100%'} />
        </StoryBookItem>,
      );
    }
    return skeleton;
  };

  const renderDiaryList = (diaryList) =>
    diaryList.length > 0 ? (
      diaryList.map(({ id, photo, recordedAt, title }) => (
        <StoryBookItem key={id}>
          <Link to={`/album/${albumId}/diary/${id}`}>
            <DimImage
              dimHeight="50px"
              dimPadding="8px"
              height="100%"
              src={photo}
            >
              <StoryBookDiaryTitle>{title}</StoryBookDiaryTitle>
              <StoryBookDiaryDateTime>{recordedAt}</StoryBookDiaryDateTime>
            </DimImage>
          </Link>
        </StoryBookItem>
      ))
    ) : (
      <DefaultContainer>
        <DefaultText>일기가 없습니다.</DefaultText>
      </DefaultContainer>
    );

  return (
    <StoryBookDiaryListContainer {...props}>
      {isLoading ? renderSkeletonList() : renderDiaryList(diaryList)}
    </StoryBookDiaryListContainer>
  );
};

export default StoryBookDiaryList;
