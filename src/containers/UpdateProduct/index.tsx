import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Form, Input, Button, Select, message, Modal } from 'antd';
import { useApi } from '@/src/api/useApi';
import styles from './styles.module.scss';
import FormContainer from '@/src/components/Form';
import { useRouter } from 'next/router';

const UpdateProductContainer: React.FC<{ props: any }> = ({ props }) => {
  const productID: string = props;

  const $api = useApi();
  const router = useRouter();
  const [modalText, setModalText] = useState<string>(
    'Bạn chắc chắn muốn sửa sản phẩm này?'
  );
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);
  const [bodyUpdateProduct, setBodyUpdateProduct] = useState();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    values.price = parseInt(values.price);
    setBodyUpdateProduct(values);
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
    let success = await $api.updateProduct(bodyUpdateProduct, productID);
    if (success) {
      setIsOpenConfirmModal(false);
      setConfirmLoading(false);
      setModalText('Bạn chắc chắn muốn sửa sản phẩm này?');
      message.success(`Sửa thành công sản phẩm!`);
      router.back();
    } else {
      setModalText('Sửa sản phẩm thất bại!');
      message.error(`Sửa thất bại sản phẩm`);
    }
  };

  const handleCancel = () => {
    setIsOpenConfirmModal(false);
  };

  //Product By ID
  const [productById, setProductById] = useState<any>();

  //   const getProduct = async () => {
  //     const data: any = await $api.getProductById(productID);
  //     setProductById(data);
  //   };

  useEffect(() => {
    const getProduct = async () => {
      const data: any = await $api.getProductById(productID);
      setProductById(data);
    };
    getProduct();
  }, []);

  //   const defaultValueForm: IUpdateProduct = {
  //     title: productById?.title,
  //     price: productById?.price,
  //     category: productById?.category,
  //     description: productById?.description,
  //   };
  console.log(productById);

  return (
    <div className={styles.updateProduct_container}>
      <Button className="btn_add_left" onClick={handleClickBack}>
        Quay lại
      </Button>

      <FormContainer
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        defaultValue={{
          title: productById?.title,
          price: productById?.price,
          category: productById?.category,
          description: productById?.description,
        }}
      ></FormContainer>

      <Modal
        title="Sửa sản phẩm"
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

export default UpdateProductContainer;
