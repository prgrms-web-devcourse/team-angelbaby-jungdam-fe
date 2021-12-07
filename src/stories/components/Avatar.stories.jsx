import { Avatar } from '@components/base';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Component/Avatar',
  component: Avatar,
};

export const Default = (args) => {
  return <Avatar {...args} />;
};

export const Large = (args) => {
  return <Avatar size="large" {...args} />;
};
