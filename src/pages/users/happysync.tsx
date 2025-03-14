'use client';

import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Layout } from '@/components/Layout';
import { HappysyncFeature } from '@/feature/Users/Happysync';

export default function HappysyncUsers() {
  return (
    <>
      <Header />
      <Navigation />
      <Layout>
        <HappysyncFeature />
      </Layout>
    </>
  );
}