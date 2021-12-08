import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import color from '@assets/colors/Color';
import { Image } from '@components/base';

const Sizes = {
  large: '80px',
  base: '32px',
};

const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => Sizes[size]};
  height: ${({ size }) => Sizes[size]};
  border: 1px solid ${color.grey_50};
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  > img {
    width: 100%;
  }
`;

const Avatar = ({ size, src, ...props }) => {
  return (
    <AvatarWrapper {...props} size={size}>
      <Image src={src} alt="userProfile" mode="cover" />
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  size: 'base',
  src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['base', 'large']),
  src: PropTypes.string,
};

export default Avatar;
