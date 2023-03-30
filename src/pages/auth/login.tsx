import React from 'react';
import { Layout, Rate } from 'antd';
import { AppLayout } from '@/src/components/layout-components';
import { LoginContainer } from '@/src/containers/auth-containers';

function Dashboard() {
  return (
    <div>
      <LoginContainer></LoginContainer>
    </div>
  );
}

export default Dashboard;

//login -> co token -> luu cookie -> check lay tu cookie ra
