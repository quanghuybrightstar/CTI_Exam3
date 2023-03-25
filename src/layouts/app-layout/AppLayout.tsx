import { Layout, Divider } from 'antd';
import { SiderContainer, HeaderContainer, MainContainer } from '@/src/containers/app-containers';
import React, { useState } from 'react';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

const { Header, Content } = Layout;

function AppLayout () {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider>
      <SiderContainer props={{ collapsed: collapsed }}></SiderContainer>
      <Layout style={{backgroundColor: '#f4f3ef'}}>
        <HeaderContainer >
          {React.createElement(
            collapsed ? AiFillRightCircle : AiFillLeftCircle,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </HeaderContainer>

        <MainContainer></MainContainer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
