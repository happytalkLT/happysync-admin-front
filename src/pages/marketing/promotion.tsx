'use client';

import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Layout } from '@/components/Layout';
import { PromotionFeature } from '@/feature/Marketing/Promotion';

export default function PromotionMarketing() {
  return (
    <>
      <Header />
      <Navigation />
      <Layout>
        <PromotionFeature/>
      </Layout>
    </>
  );
}