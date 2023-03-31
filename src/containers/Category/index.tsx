import { useState, useEffect } from 'react';
import { useApi } from '@/src/api/useApi';
import type { ColumnsType } from 'antd/es/table';
import { Table, Button } from 'antd';
import styles from './styles.module.scss';
import Link from 'next/link';

const CategoryContainer = () => {
  const $api = useApi();
  const [dataCategory, setDataCategory] = useState();

  const getCategory = async () => {
    const data: any = await $api.getCategories();
    setDataCategory(data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const columnsCategories: ColumnsType<IDataCategory> = [
    {
      title: 'Tên thể loại',
      dataIndex: '',
      sorter: true,
      width: '70%',
    },
    {
      title: 'Hành động',
      dataIndex: '',
      key: '',
      render: (item) => (
        <div>
          <div className="btn-edit">Sửa</div>
          <div className="btn-delete">Xóa</div>
        </div>
      ),
      width: '30%',
    },
  ];

  return (
    <div className="container">
      <div className={styles.category_container}>
        <Link href={'/category/add-category'}>
          <Button className="btn_add_right">Thêm thể loại mới</Button>
        </Link>
        <Table
          columns={columnsCategories}
          dataSource={dataCategory}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        ></Table>
      </div>
    </div>
  );
};

export default CategoryContainer;
