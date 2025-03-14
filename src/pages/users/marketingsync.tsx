'use client';

import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Layout } from '@/components/Layout';
import { MarketingsyncFeature } from '@/feature/Users/Marketingsync';

export default function MarketingsyncUsers() {
  return (
    <>
      <Header />
      <Navigation />
      <Layout>
        <MarketingsyncFeature />
      </Layout>
    </>
  );
}