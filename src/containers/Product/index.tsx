import { useState, useEffect, useRef } from 'react';
import { useApi } from '@/src/api/useApi';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import { Table, Button, Modal, message, Input, Space } from 'antd';
import Utils from '@/src/utils';
import styles from './styles.module.scss';
import { Image } from 'antd';
import Link from 'next/link';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import type { InputRef } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

const ProductContainer = () => {
  const $api = useApi();
  const [dataProducts, setDataProducts] = useState();
  const [modalText, setModalText] = useState<string>(
    'Bạn chắc chắn muốn xóa sản phẩm này?'
  );
  const [productId, setProductId] = useState<string>('');
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);

  useEffect(() => {
    const getProducts = async () => {
      const data: any = await $api.getProducts();
      setDataProducts(data);
    };
    getProducts();
  }, [$api]);

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

  //Handle Search Table
  type DataIndexProduct = keyof IDataProduct;

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndexProduct
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (
    dataIndex: DataIndexProduct
  ): ColumnType<IDataProduct> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columnProducts: ColumnsType<IDataProduct> = [
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
      ...getColumnSearchProps('title'),
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
      ...getColumnSearchProps('brand'),
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
      ...getColumnSearchProps('category'),
    },
    {
      title: 'Hành động',
      dataIndex: '',
      key: '',
      render: (item) => (
        <div>
          <Link href={'product/[productId]'} as={`product/${item.id}`}>
            <div className="btn-edit">Sửa</div>
          </Link>
          <div
            className="btn-delete"
            onClick={() => handleDeleteProduct(item.id)}
          >
            Xóa
          </div>
        </div>
      ),
      width: '30%',
    },
  ];
  return (
    <div className="container">
      <div className={styles.product_container}>
        <Link href={'/product/add-product'}>
          <Button className="btn_add_right">Thêm sản phẩm mới</Button>
        </Link>

        <Table
          columns={columnProducts}
          dataSource={dataProducts}
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
