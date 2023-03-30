import React, { useState } from 'react';
import { Modal, message } from 'antd';
import { useRouter } from 'next/router';
import { IoLogOutOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
import { deleteCookie } from 'cookies-next';

const LogOut: React.FC = () => {
  const router = useRouter();
  const [modalText, setModalText] = useState<string>(
    'Bạn chắc chắn muốn đăng xuất tài khoản?'
  );
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);

  const showModal = () => {
    setIsOpenConfirmModal(true);
  };

  const handleOK = async () => {
    setModalText('Đang xác nhận...');
    setIsOpenConfirmModal(false);
    setConfirmLoading(false);
    setModalText('Bạn chắc chắn muốn đăng xuất tài khoản?');
    message.success(`Đăng xuất thành công!`);
    router.push('auth/login');
    deleteCookie('accessToken');
  };

  const handleCancel = () => {
    setIsOpenConfirmModal(false);
  };

  const handleClickLogOut = () => {
    showModal();
  };

  return (
    <div className={styles.logout_container}>
      <IoLogOutOutline
        className={styles.header__icon}
        onClick={handleClickLogOut}
      />
      <Modal
        title="Thêm sản phẩm"
        open={isOpenConfirmModal}
        onOk={handleOK}
        cancelText={'Hủy'}
        okText={'Xác nhận'}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        centered={true}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
};

export default LogOut;
