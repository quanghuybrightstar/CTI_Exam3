import React, { useState, useEffect } from 'react';
import { Layout, Table } from 'antd';
import { AppLayout } from '@/src/components/layout-components';
import CategoryContainer from '@/src/containers/Category';

function Dashboard() {
  return (
    <AppLayout>
      <CategoryContainer></CategoryContainer>
    </AppLayout>
  );
}

export default Dashboard;
