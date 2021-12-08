import Box from './Box';
import Circle from './Circle';
import Line from './Line';

// 사용법
// <Skeleton.Box width={200} height={300}/> = 박스모양의 스켈레톤 UI, width, height 설정 가능
// <Skeltone.Circle size={200} /> = 원형의 스켈레톤 UI, size = width/height
// <Skeleton.Line count={3} /> = 선형의 스켈레톤 UI, count = 라인수
const Skeleton = {
  Box,
  Circle,
  Line,
};
export default Skeleton;
