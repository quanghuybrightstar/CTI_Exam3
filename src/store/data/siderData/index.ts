import { RiBankLine, RiBookMarkLine} from 'react-icons/ri';
import { TbLayoutDashboard } from 'react-icons/tb';
import { TfiRulerPencil } from 'react-icons/tfi';
import {FaUserCircle} from 'react-icons/fa';
import React from 'react';
import type { MenuProps } from 'antd';

export const dataMenuItems: IMenuItemSider[] = [
  {
    key: '1',
    icon: React.createElement(RiBankLine),
    label: 'DASH BOARD',
  },
  {
    key: '2',
    icon: React.createElement(RiBookMarkLine),
    label: 'PAGES',
    children: [
      {
        key: '2_1',
        label: 'Timeline',
      },
      {
        key: '2_2',
        label: 'Login',
      },
      {
        key: '2_3',
        label: 'Register',
      },
    ],
  },
  {
    key: '3',
    icon: React.createElement(TbLayoutDashboard),
    label: 'COMPONENTS',
    children: [
      {
        key: '3_1',
        label: 'Button',
      },
      {
        key: '3_2',
        label: 'Grid System',
      },
      {
        key: '3_3',
        label: 'Panels',
      },
    ],
  },
  {
    key: '4',
    icon: React.createElement(TfiRulerPencil),
    label: 'DASH BOARD',
  },
  {
    key: '4',
    icon: React.createElement(TfiRulerPencil),
    label: 'DASH BOARD',
  },
  {
    key: '4',
    icon: React.createElement(TfiRulerPencil),
    label: 'DASH BOARD',
  },
  {
    key: '4',
    icon: React.createElement(TfiRulerPencil),
    label: 'DASH BOARD',
  },
  {
    key: '4',
    icon: React.createElement(TfiRulerPencil),
    label: 'DASH BOARD',
  },
  
  {
    key: '4',
    icon: React.createElement(TfiRulerPencil),
    label: 'DASH BOARD',
  },
  {
    key: '4',
    icon: React.createElement(TfiRulerPencil),
    label: 'DASH BOARD',
  },
  {
    key: '4',
    icon: React.createElement(TfiRulerPencil),
    label: 'DASH BOARD',
  },
  {
    key: '4',
    icon: React.createElement(TfiRulerPencil),
    label: 'DASH BOARD',
  },
  {
    key: '4',
    icon: React.createElement(TfiRulerPencil),
    label: 'DASH BOARD',
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
