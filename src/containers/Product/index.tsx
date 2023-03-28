import { useState, useEffect } from 'react';
import { useApi } from '@/src/hooks/useApi';
import type { ColumnsType } from 'antd/es/table';
import { Table, Button, Modal, message } from 'antd';
import Utils from '@/src/utils';
import styles from './styles.module.scss';
import { Image } from 'antd';
import Link from 'next/link';

const ProductContainer = () => {
  const $api = useApi();
  const [dataCategory, setDataCategory] = useState();
  const [modalText, setModalText] = useState<string>(
    'Bạn chắc chắn muốn xóa sản phẩm này?'
  );
  const [productId, setProductId] = useState<string>('');
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);

  const getProducts = async () => {
    const data: any = await $api.getProducts();
    setDataCategory(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDeleteProduct = (id: string) => {
    showModal();
    setProductId(id);
  };
  const showModal = () => {
    setIsOpenConfirmModal(true);
  };

  const handleOK = async () => {
    setModalText('Đang xác nhận...');
    let success = await $api.deleteProduct(productId);
    if (success) {
      getProducts();
      setIsOpenConfirmModal(false);
      setConfirmLoading(false);
      setModalText('Bạn chắc chắn muốn xóa sản phẩm này?');
      message.success(`Xóa thành công sản phẩm có id: ${productId}`);
    } else {
      setModalText('Xóa sản phẩm thất bại!');
      message.error(`Xóa thất bại sản phẩm có id: ${productId}`);
    }
  };

  const handleCancel = () => {
    setIsOpenConfirmModal(false);
  };

  const columnProducts: ColumnsType<IDataCategory> = [
    {
      title: 'Id',
      key: 'id',
      dataIndex: 'id',
      width: '10%',
    },
    {
      title: 'Ảnh sản phẩm',
      key: 'thumbnail',
      dataIndex: 'thumbnail',
      render: (thumbnail) => {
        return (
          <div className={styles.imgProductWrapper}>
            <Image src={thumbnail} alt="Ảnh sản phẩm"></Image>
          </div>
        );
      },
    },

    {
      title: 'Tên sản phẩm',
      dataIndex: 'title',
      width: '20%',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      width: '20%',
      render: (description) => {
        return (
          <div title={description} className={styles.product__desc}>
            {description}
          </div>
        );
      },
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      width: '10%',
      render: (price) => {
        return <span>{`${Utils.convertNumberValueType(price)} $`}</span>;
      },
    },
    {
      title: 'Thương hiệu',
      dataIndex: 'brand',
      width: '15%',
    },
    {
      title: 'Tỷ lệ chiết khấu',
      dataIndex: 'discountPercentage',
      width: '15%',
    },
    {
      title: 'Tỷ lệ đánh giá',
      dataIndex: 'rating',
      width: '15%',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      width: '10%',
    },
    {
      title: 'Thể loại',
      dataIndex: 'category',
      width: '20%',
    },
    {
      title: 'Hành động',
      dataIndex: '',
      key: '',
      render: (item) => (
        <div>
          <div className="btn-edit">Sửa</div>
          <div className="btn-delete" onClick={() => handleDeleteProduct(item.id)}>Xóa</div>
        </div>
      ),
      width: '30%',
    },
  ];
  return (
    <div className="container">
      <div className={styles.product_container}>
        <Link href={'/product/add_product'}>
          <Button style={{ float: 'right', marginBottom: '2.8rem' }}>
            Thêm sản phẩm mới
          </Button>
        </Link>

        <Table
          columns={columnProducts}
          dataSource={dataCategory}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        ></Table>

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
    </div>
  );
};

export default ProductContainer;
