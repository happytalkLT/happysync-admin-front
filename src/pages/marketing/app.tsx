'use client';

import { Header } from '@/components/Header';
import { Navigation } from '@/components/Navigation';
import { Layout } from '@/components/Layout';
import { AppFeature } from '@/feature/Marketing/App';

export default function AppMarketing() {
  return (
    <>
      <Header />
      <Navigation />
      <Layout>
        <AppFeature/>
      </Layout>
    </>
  );
}