import React from 'react';
import { AppLayout } from '@/src/components/layout-components';
import AddProduct from '@/src/containers/AddProduct';

function Dashboard() {
  return (
    <AppLayout>
      <AddProduct></AddProduct>
    </AppLayout>
  );
}

export default Dashboard;
