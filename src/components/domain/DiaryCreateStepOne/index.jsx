import styled from '@emotion/styled';
import { css } from '@emotion/react';
import font from '@assets/fonts';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import color from '@assets/colors';

import 'react-datepicker/dist/react-datepicker.css';

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  margin-bottom: 20px;
  ${font.heading_24};
`;

const InputStyle = css`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${color.brown};
  background-color: transparent;
  color: ${color.black};
  outline: none;
  ${font.content_18};

  &::placeholder {
    color: ${color.grey};
  }
`;

const ErrorText = styled.span`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;

const DiaryCreateStepOne = ({ date, setDate, dateError }) => {
  return (
    <Container>
      <Title>날짜를 선택해주세요.</Title>
      <DatePicker
        css={InputStyle}
        locale={ko}
        dateFormat="yyyy-MM-dd"
        name="date"
        onChange={(date) => setDate(date)}
        placeholderText="일기 기록 날짜를 입력해주세요 !"
        selected={date}
        maxDate={new Date()}
      />
      {dateError && <ErrorText>{dateError}</ErrorText>}
    </Container>
  );
};

export default DiaryCreateStepOne;
