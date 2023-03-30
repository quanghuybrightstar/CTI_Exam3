import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useApi } from '@/src/api/useApi';
import styles from './styles.module.scss';

const { Option } = Select;
const { TextArea } = Input;

const FormContainer: React.FC<IPropsForm> = ({
  onFinish,
  onFinishFailed,
  defaultValue,
}) => {
  const $api = useApi();

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
    <div>
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
          <Input
            placeholder="Tên sản phẩm ..."
            defaultValue={defaultValue.title}
          ></Input>
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
        >
          <Input
            type="number"
            placeholder="Giá ..."
            defaultValue={defaultValue.price}
          ></Input>
        </Form.Item>

        <Form.Item
          label="Thể loại"
          name="category"
          rules={[
            { required: true, message: 'Vui lòng nhập thể loại sản phẩm!' },
          ]}
        >
          <Select
            placeholder="Thể loại ..."
            defaultValue={defaultValue.category}
          >
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
          <TextArea
            placeholder="Mô tả ..."
            defaultValue={defaultValue.description}
          ></TextArea>
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
    </div>
  );
};

export default FormContainer;
