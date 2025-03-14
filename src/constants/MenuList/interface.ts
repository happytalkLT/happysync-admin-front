import { ReactNode } from 'react';

export interface Menu {
  label: string;
  icon: ReactNode;
  key: string;
  hide?: boolean;
}

export interface SubMenu {
  label: string;
  parent: string;
  key: string;
}