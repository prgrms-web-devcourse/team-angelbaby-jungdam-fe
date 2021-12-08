import { useState } from 'react';
import { Modal } from '@components/base';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setVisible(true);
        }}
      >
        show Modal
      </button>
      <Modal visible={visible} onClose={() => setVisible(false)}>
        총 1명의 인원을 초대하시겠습니까?
      </Modal>
    </div>
  );
};
