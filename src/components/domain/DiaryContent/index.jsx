import styled from '@emotion/styled';
import font from '@assets/fonts';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 20px;
  ${() => font.content_16}
`;

const Paragraph = styled.p`
  margin-bottom: 5px;
`;

const DiaryContent = ({ content }) => {
  return (
    <Container>
      {content &&
        content
          .split('\n')
          .map((line, index) => <Paragraph key={index}>{line}</Paragraph>)}
    </Container>
  );
};

export default DiaryContent;
