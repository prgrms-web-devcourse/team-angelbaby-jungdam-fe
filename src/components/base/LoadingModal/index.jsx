import React from 'react';
import { Modal, Lottie } from '@components/base';

const LoadingModal = ({ isLoading = true }) => {
  return isLoading ? (
    <Modal selectable={null} visible={isLoading}>
      <Lottie animationData={'loading'} height="100%" />
    </Modal>
  ) : null;
};

export default LoadingModal;
