import { Skeleton } from '@components/base';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export const Box = () => <Skeleton.Box width={200} height={200} />;
export const Circle = () => <Skeleton.Circle size={200} />;
export const Line = () => <Skeleton.Line count={4} />;
