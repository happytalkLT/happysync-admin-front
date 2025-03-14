'use client';

import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Layout } from '@/components/Layout';
import { RatePlanFeature } from '@/feature/Payments/RatePlan';

export default function RatePlanPayments() {
  return (
    <>
      <Header />
      <Navigation />
      <Layout>
        <RatePlanFeature />
      </Layout>
    </>
  );
}