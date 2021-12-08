import Box from './Box';

const Line = ({ count = 3, ...props }) => {
  return (
    <div {...props}>
      {Array.from(Array(count), (_, index) => (
        <Box width="100%" height={16} key={index} />
      ))}
    </div>
  );
};

export default Line;
