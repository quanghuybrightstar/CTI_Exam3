import React from 'react';
import { Layout, Menu, Divider } from 'antd';
import styles from './Sider.module.scss';
import { dataMenuItems, userInfoItems } from '@/src/store/data/siderData';

import { RiBankLine } from 'react-icons/ri';

const { Sider } = Layout;

const SiderContainer: React.FC<{ props: ICollapsed }> = ({ props }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      className = {styles.sider_container}
    >
      <div className={styles.sider__name}>CREATE TIM</div>
      <Divider orientation="left" plain></Divider>
      <Menu mode="inline" items={userInfoItems} className = {'menu-user'}></Menu>
      <Divider orientation="left" plain></Divider>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={dataMenuItems}
      ></Menu>
    </Sider>
  );
};

export default SiderContainer;

[
  {
    key: '1',
    icon: <RiBankLine />,
    label: 'Dash board',
  },
  {
    key: '2',
    icon: <RiBankLine />,
    label: 'Dash board',
  },
  {
    key: '3',
    icon: <RiBankLine />,
    label: 'Dash board',
  },
  {
    key: '4',
    icon: <RiBankLine />,
    label: 'Dash board',
  },
];
