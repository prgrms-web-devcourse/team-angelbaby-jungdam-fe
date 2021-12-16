import styled from '@emotion/styled';
import font from '@assets/fonts';

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 20px;
  ${() => font.content_12}
`;

const DiaryContent = ({ content }) => {
  return <Container>{content}</Container>;
};

export default DiaryContent;
