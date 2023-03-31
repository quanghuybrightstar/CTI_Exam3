import React from 'react';
import { Layout, Menu, Divider } from 'antd';
import styles from './styles.module.scss';
import { dataMenuItems, userInfoItems } from '@/src/store/data/siderData';
import { RiBankLine } from 'react-icons/ri';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Sider } = Layout;

const SiderContainer: React.FC<{ props: ICollapsed }> = ({ props }) => {
  const router = useRouter();

  // const handleClickRouter = (label: string) => {
  //   router.push(`${label}`);
  // };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      className={styles.sider_container}
    >
      <div className={styles.sider__name}>
        <Link href={'/'} className={styles.sider__name}>
          CREATIVE TIM
        </Link>
      </div>
      <Divider orientation="left" plain></Divider>
      <Menu mode="inline" items={userInfoItems} className={'menu-user'}></Menu>
      <Divider orientation="left" plain></Divider>

      <Menu mode="inline" defaultSelectedKeys={['1']}>
        {dataMenuItems.map((item: IMenuItemSider) => {
          const IconMenuItem = item.icon;

          return (
            <Menu.Item
              key={`menu_${item.key}`}
              // onClick={() => handleClickRouter(item.label)}
              className={styles.menuItem}
            >
              <Link href={`${item.label}`} className={styles.linkMenuItem}>
                <IconMenuItem className={styles.iconMenuItem}></IconMenuItem>
                <span className={styles.labelMenuItem}>{item.label}</span>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
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
