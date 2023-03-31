import React from 'react';
import { AppLayout } from '@/src/components/layout-components';
import UpdateProductContainer from '@/src/containers/UpdateProduct';
import { useRouter } from 'next/router';

function Dashboard() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <AppLayout>
      <div>
        <UpdateProductContainer props={productId}></UpdateProductContainer>
      </div>
    </AppLayout>
  );
}

export default Dashboard;
