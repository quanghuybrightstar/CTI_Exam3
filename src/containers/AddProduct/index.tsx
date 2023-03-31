import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Modal, message, Select } from 'antd';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { useApi } from '@/src/api/useApi';
import FormComponent from '@/src/components/Form';

const { Option } = Select;
const { TextArea } = Input;

const AddProduct: React.FC = () => {
  const $api = useApi();
  const router = useRouter();
  const [modalText, setModalText] = useState<string>(
    'Bạn chắc chắn muốn thêm sản phẩm này?'
  );
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);
  const [bodyAddProduct, setBodyAddProduct] = useState();
  const [form] = Form.useForm();

  //Func Form
  const onFinish = (values: any) => {
    console.log('Success:', values);
    values.price = parseInt(values.price);
    setBodyAddProduct(values);
    showModal();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleClickBack = () => {
    router.back();
  };

  //Func Modal
  const showModal = () => {
    setIsOpenConfirmModal(true);
  };

  const handleOK = async () => {
    setModalText('Đang xác nhận...');
    let success = await $api.createProduct(bodyAddProduct);
    if (success) {
      setIsOpenConfirmModal(false);
      setConfirmLoading(false);
      setModalText('Bạn chắc chắn muốn thêm sản phẩm này?');
      message.success(`Thêm thành công sản phẩm!`);
      router.back();
    } else {
      setModalText('Thêm sản phẩm thất bại!');
      message.error(`Thêm thất bại sản phẩm`);
    }
  };

  const handleCancel = () => {
    setIsOpenConfirmModal(false);
  };

  return (
    <div className={styles.addProduct_container}>
      <Button className="btn_add_left" onClick={handleClickBack}>
        Quay lại
      </Button>
      <FormComponent
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        forms={form}
      ></FormComponent>
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

export default AddProduct;
