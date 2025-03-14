'use client';

import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Layout } from '@/components/Layout';
import { MessageFeature } from '@/feature/Message';

export default function Message() {
  return (
    <>
      <Header />
      <Navigation />
      <Layout>
        <MessageFeature />
      </Layout>
    </>
  );
}