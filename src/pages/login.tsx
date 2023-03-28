import React from 'react';
import { Layout, Rate } from 'antd';
import { AppLayout } from '@/src/components/layout-components';
import DashboardContainer from '@/src/containers/Dashboard';

function Dashboard() {
  return (
    <AppLayout>
      <DashboardContainer></DashboardContainer>
    </AppLayout>
  );
}

export default Dashboard;

//login -> co token -> luu cooki -> chekc lay tu cookie ra
