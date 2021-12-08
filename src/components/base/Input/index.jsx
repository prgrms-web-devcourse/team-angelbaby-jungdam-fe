import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import color from '@assets/colors/Color';

const inputSizes = {
  sm: '24px',
  base: '32px',
};

const StyledInput = styled.input`
  display: block;
  height: ${({ size }) => inputSizes[size]};
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${color.brown};
  font-size: 16px;
  background-color: transparent;
  color: ${color.black};
  outline: none;

  &::placeholder {
    color: ${color.grey};
  }

  &:disabled,
  &:disabled:hover {
    border-color: ${color.grey};
    cursor: not-allowed;
    transition: none;
  }

  &.error {
    border-color: #f53354;
  }

  &.success {
    border-color: #50c24e;
  }
`;

const Input = ({
  width,
  isFullWidth,
  size,
  onChange,
  name,
  error,
  success,
  ...props
}) => {
  const inputStyle = {
    width: isFullWidth ? `100%` : `${width}px`,
  };

  let status = '';

  if (error) {
    status = 'error';
  }
  if (success) {
    status = 'success';
  }

  return (
    <StyledInput
      onChange={onChange}
      name={name}
      size={size}
      className={status || undefined}
      {...props}
      style={{ ...props.style, ...inputStyle }}
    />
  );
};

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isFullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['base', 'sm']),
  error: PropTypes.bool,
  success: PropTypes.bool,
  style: PropTypes.object,
};

Input.defaultProps = {
  width: 288,
  isFullWidth: false,
  onChange: () => {},
  size: 'base',
  error: false,
  success: false,
  style: {},
};

export default Input;
