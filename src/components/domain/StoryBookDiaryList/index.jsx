import React from 'react';
import styled from '@emotion/styled';
import font from '@assets/fonts';
import color from '@assets/colors';
import { DimImage } from '@components/base';
import { Link } from 'react-router-dom';
const StoryBookDiaryListContainer = styled.ul`
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
`;
const StoryBookDiaryDateTime = styled.span`
  color: ${color.white};
  ${font.content_12};
`;

const StoryBookDiaryList = ({ diaryList, ...props }) => {
  const renderDiaryList = (diaryList) =>
    diaryList.map(({ diaryImage, title, dateTime }, index) => (
      <StoryBookItem key={index}>
        <Link to="">
          <DimImage
            dimHeight="50px"
            dimPadding="8px"
            height="100%"
            src={diaryImage}
          >
            <StoryBookDiaryTitle>{title}</StoryBookDiaryTitle>
            <StoryBookDiaryDateTime>{dateTime}</StoryBookDiaryDateTime>
          </DimImage>
        </Link>
      </StoryBookItem>
    ));

  return (
    <StoryBookDiaryListContainer {...props}>
      {renderDiaryList(diaryList)}
    </StoryBookDiaryListContainer>
  );
};

export default StoryBookDiaryList;
