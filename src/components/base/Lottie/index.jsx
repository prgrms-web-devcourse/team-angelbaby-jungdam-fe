import { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import lottie from 'lottie-web';
import PropTypes from 'prop-types';

const AnimationBox = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Lottie = ({
  animationData,
  width = '100%',
  height = '100%',
  ...props
}) => {
  const dom = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: dom.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require(`@assets/lottie/${animationData}.json`),
    });
  }, [animationData]);
  return <AnimationBox ref={dom} width={width} height={height} {...props} />;
};

export default Lottie;

Lottie.propTypes = {
  animationData: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};
