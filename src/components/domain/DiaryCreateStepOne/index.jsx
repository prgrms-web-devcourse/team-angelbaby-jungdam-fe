import styled from '@emotion/styled';
import font from '@assets/fonts';
import { Input } from '@components/base';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  margin-bottom: 20px;
  ${font.heading_24};
`;

const DiaryCreateStepOne = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Title>날짜를 선택해주세요.</Title>
      <Input
        type="date"
        name="Date"
        onChange={onChange}
        css={font.content_16}
      />
    </Container>
  );
};

export default DiaryCreateStepOne;
