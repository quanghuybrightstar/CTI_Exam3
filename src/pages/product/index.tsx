import React from 'react';
import { Layout, Rate } from 'antd';
import { AppLayout } from '@/src/components/layout-components';
import ProductContainer from '@/src/containers/Product';

function Dashboard() {
  return (
    <AppLayout>
      <ProductContainer></ProductContainer>
    </AppLayout>
  );
}

export default Dashboard;
