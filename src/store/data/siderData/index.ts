import { RiBankLine, RiBookMarkLine } from 'react-icons/ri';
import { TbLayoutDashboard } from 'react-icons/tb';
// import { TfiRulerPencil } from 'react-icons/tfi';
import { FaUserCircle, FaProductHunt } from 'react-icons/fa';
import React from 'react';
import { BiCategoryAlt } from 'react-icons/bi';

export const dataMenuItems: IMenuItemSider[] = [
  {
    key: '1',
    icon: RiBankLine,
    label: 'dashboard',
  },
  {
    key: '2',
    icon: BiCategoryAlt,
    label: 'category',
  },
  {
    key: '3',
    icon: FaProductHunt,
    label: 'product',
  },

  {
    key: '4',
    icon: RiBookMarkLine,
    label: 'PAGES',
    children: [
      {
        key: '4_1',
        label: 'Timeline',
      },
      {
        key: '4_2',
        label: 'Login',
      },
      {
        key: '4_3',
        label: 'Register',
      },
    ],
  },
];

export const userInfoItems: IMenuItemSider[] = [
  {
    key: '0',
    icon: React.createElement(FaUserCircle),
    label: 'Quang Huy',
    children: [
      {
        key: '0_1',
        label: 'My Profile',
      },
      {
        key: '0_2',
        label: 'Edit Profile',
      },
      {
        key: '0_3',
        label: 'Settings',
      },
    ],
  },
];
