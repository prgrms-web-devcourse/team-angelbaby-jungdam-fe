import styled from '@emotion/styled';
import font from '@assets/fonts';
import color from '@assets/colors';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${color.grey};
  ${() => font.content_16}
`;

const DiaryContent = ({ content }) => {
  return (
    <Container>
      {content && content.split('\n').map((line) => <p>{line}</p>)}
    </Container>
  );
};

export default DiaryContent;
