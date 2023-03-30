import React, { useState, useEffect } from 'react';
import { Layout, Table } from 'antd';
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
