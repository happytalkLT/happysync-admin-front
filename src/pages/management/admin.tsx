'use client';
import { Layout } from '@/components/Layout';
import { Navigation } from '@/components/Navigation';
import { Header } from '@/components/Header';

export default function AdminManagement() {
  return (
    <>
      <Header/>
    <Navigation/>
    <Layout>
      운영 계정 관리 페이지
    </Layout>
    </>
  );
}