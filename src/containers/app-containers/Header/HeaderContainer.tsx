import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Layout, Input } from 'antd';
import { TbLayoutDashboard } from 'react-icons/tb';
import { HiOutlineBell } from 'react-icons/hi';
import {AiFillCaretDown} from 'react-icons/ai';
import {IoSettingsOutline} from 'react-icons/io5'

const cx = classNames.bind(styles);
const { Header } = Layout;
const { Search } = Input;


const HeaderContainer = ({ children }: IChildrenHeader) => {
  const onSearch = (value: string) => console.log(value);

  return (
    <Header className={cx('header-container')}>
      <div className={cx('header-left')}>
        {children}

        <div className={cx('header__name')}>
          <a href="#">Paper Dashboard 2 PRO</a>
        </div>
      </div>

      <div className={cx('header-right')}>
        <Search
          placeholder="Search..."
          onSearch={onSearch}
          className={cx('input-search')}
        />

        <TbLayoutDashboard className={cx('header__icon')} />

        <div className={cx('header-icon--notify')}>
          <HiOutlineBell />
          <AiFillCaretDown className={cx('icon_fill_down')}/>
        </div>

        <IoSettingsOutline className={cx('header__icon')}/>
      </div>
    </Header>
  );
};

export default HeaderContainer;
