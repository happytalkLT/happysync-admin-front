'use client';

import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Layout } from '@/components/Layout';
import { ReceiptFeature } from '@/feature/Payments/Receipt';

export default function ReceiptPayments() {
  return (
    <>
      <Header />
      <Navigation />
      <Layout>
        <ReceiptFeature />
      </Layout>
    </>
  );
}