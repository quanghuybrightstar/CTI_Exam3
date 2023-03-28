import React from 'react';
import styles from './styles.module.scss';
import { Layout, Input } from 'antd';
import { TbLayoutDashboard } from 'react-icons/tb';
import { HiOutlineBell } from 'react-icons/hi';
import { AiFillCaretDown } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';

const { Header } = Layout;
const { Search } = Input;

const HeaderContainer = ({ children }: IChildrenHeader) => {
  const onSearch = (value: string) => console.log(value);

  return (
    <Header className={styles.headerContainer}>
      <div className={styles.header_left}>
        {children}

        <div className={styles.header__name}>
          <a href="#">Paper Dashboard 2 PRO</a>
        </div>
      </div>

      <div className={styles.header_right}>
        <Search
          placeholder="Search..."
          onSearch={onSearch}
          className={styles.input_search}
        />

        <TbLayoutDashboard className={styles.header__icon} />

        <div className={styles.header__icon_notify}>
          <HiOutlineBell />
          <AiFillCaretDown className={styles.icon_fill_down} />
        </div>

        <IoSettingsOutline className={styles.header__icon} />
      </div>
    </Header>
  );
};

export default HeaderContainer;
