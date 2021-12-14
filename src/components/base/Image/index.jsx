import PropTypes from 'prop-types';
import font from '@assets/fonts';
import color from '@assets/colors';
import styled from '@emotion/styled';
const Image = ({ alt, block, width, height, mode, ...props }) => {
  // image style 설정 가로,세로,모드,블록 설정 완료
  const imageStyle = {
    width,
    height,
    objectFit: mode ?? 'fill', // cover, none, contain
    display: block && 'block',
  };

  return <img alt={alt} style={{ ...props.style, ...imageStyle }} {...props} />;
};

export default Image;

Image.propTypes = {
  alt: PropTypes.string,
  block: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mode: PropTypes.oneOf(['cover', 'none', 'contain']),
};

const ImageBox = styled.div`
  display: flex;
  align-items: flex-end;
  background-image: url(${(props) => props.src || ''});
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  background-size: ${(props) => props.mode || 'cover'};
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px;
`;

const DimContainer = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100px'};
  background-color: ${color.black_70};
  color: ${color.white};
  padding: 14px;
  text-shadow: 1px 2px 3px ${color.black};
  ${font.heading_20};
  border-radius: 0 0 6px 6px;
`;

export const DimImage = ({
  children,
  alt,
  width,
  height,
  mode,
  src,
  ...props
}) => {
  return (
    <ImageBox
      src={src}
      alt={alt}
      width={width}
      height={height}
      mode={mode}
      {...props}
    >
      <DimContainer>{children}</DimContainer>
    </ImageBox>
  );
};
