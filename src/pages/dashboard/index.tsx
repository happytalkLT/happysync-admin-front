'use client';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Header } from '@/components/Header';
import { DashboardFeature } from '@/feature/Dashboard';

export default function Dashboard() {
  return (
    <>
      <Header/>
      <Navigation/>
      <Layout>
        <DashboardFeature/>
      </Layout>
    </>
  );
}