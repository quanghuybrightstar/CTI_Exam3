import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Modal, message, Select } from 'antd';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { useApi } from '@/src/api/useApi';

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

  //Get category data
  const [dataCategory, setDataCategory] = useState<string[]>([]);

  const getCategory = async () => {
    const data: any = await $api.getCategories();
    setDataCategory(data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className={styles.addProduct_container}>
      <Button className="btn_add_left" onClick={handleClickBack}>
        Quay lại
      </Button>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        className={styles.form_container}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tên sản phẩm"
          name="title"
          rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
        >
          <Input placeholder="Tên sản phẩm ..."></Input>
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
        >
          <Input type="number" placeholder="Giá ..."></Input>
        </Form.Item>

        <Form.Item
          label="Thể loại"
          name="category"
          rules={[
            { required: true, message: 'Vui lòng nhập thể loại sản phẩm!' },
          ]}
        >
          <Select placeholder="Thể loại ...">
            {dataCategory?.map((category: string) => (
              <Option value={category} key={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="description"
          rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}
        >
          <TextArea placeholder="Mô tả ..."></TextArea>
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 8, span: 16 }}
          className={styles.btn_submit_form}
        >
          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Xoá sản phẩm"
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
