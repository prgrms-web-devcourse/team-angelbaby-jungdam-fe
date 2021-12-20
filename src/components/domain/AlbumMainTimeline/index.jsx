import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import Family from '@assets/Image/Family.svg';
import DefaultImage from '@assets/Image/defaultUser.png';
import color from '@assets/colors';
import font from '@assets/fonts';
import { DimImage } from '@components/base';

const Container = styled.main`
  width: 100%;
  margin-top: 70px;
  margin-bottom: 70px;
`;

const Diary = styled.div`
  margin: 0;
  margin-bottom: 40px;
  box-shadow: 3px 3px 7px gray;
  border-radius: 5px;
`;

const DiaryUserInfo = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Nickname = styled.div`
  margin-left: 5px;
  ${() => font.content_18}
`;

const DiaryInfo = styled.div`
  border-radius: 5px;
`;

const DiaryImageSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const DiaryTitle = styled.div`
  color: ${color.white};
  ${font.heading_20};
  margin-bottom: 6px;
`;

const DiaryDate = styled.div`
  color: ${color.white};
  ${font.content_16};
`;

const swiperParams = {
  pagination: true,
};

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 40vh;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledSwiperSlider = {
  width: '100%',
  height: '100%',
};
const AlbumMainTimeline = ({ diaries }) => {
  return (
    <Container>
      {diaries.length > 0 ? (
        diaries.map(({ diary, participant }) => (
          <Diary key={diary.diaryId}>
            <DiaryUserInfo>
              <Avatar src={DefaultImage} />
              <Nickname>{participant.nickname}</Nickname>
            </DiaryUserInfo>

            <DiaryInfo>
              <StyledSwiper {...swiperParams}>
                {diary.diaryPhotos.map((photo, index) => (
                  <SwiperSlide key={index} style={StyledSwiperSlider}>
                    <DiaryImageSlider>
                      <DimImage src={Family} mode="cover">
                        <DiaryTitle>{diary.title}</DiaryTitle>
                        <DiaryDate>{diary.recordedAt}</DiaryDate>
                      </DimImage>
                    </DiaryImageSlider>
                  </SwiperSlide>
                ))}
              </StyledSwiper>
            </DiaryInfo>
          </Diary>
        ))
      ) : (
        <div>default</div>
      )}
    </Container>
  );
};

export default AlbumMainTimeline;
