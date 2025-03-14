'use client';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Header } from '@/components/Header';

export default function MaintenanceManagement() {
  return (
    <>
      <Header/>
    <Navigation/>
    <Layout>
      서비스 점검 관리 페이지
    </Layout>
    </>
  );
}