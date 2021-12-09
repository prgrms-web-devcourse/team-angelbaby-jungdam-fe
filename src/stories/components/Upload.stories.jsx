import { Upload, Icon } from '@components/base';

export default {
  title: 'Components/Upload',
  component: Upload,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

const IconStyle = {
  cursor: 'pointer',
};

export const Default = (args) => {
  return (
    <Upload {...args}>
      <Icon name="fluent:camera-add-24-regular" height={48} style={IconStyle} />
    </Upload>
  );
};
