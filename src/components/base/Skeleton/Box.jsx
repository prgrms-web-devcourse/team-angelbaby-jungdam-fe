import Base from './Base';
import styled from '@emotion/styled';

const Box = styled(Base)`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height};
  border-radius: 15px;
`;

export default Box;
