import { ReactNode } from 'react';

import styles from './styles.module.css';

import { useNavigation } from '@/context/NavigationContext';
import { useRouter } from 'next/router';
import { MenuList, SubMenuList } from '@/constants/MenuList';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { isNavOpen } = useNavigation();
  const router = useRouter();
  const currentPath = router.pathname.split('/'); // 현재 URL 경로

  return (
    <div className={`${styles.layout_container} ${isNavOpen ? styles.layout_expanded : styles.layout_collapsed}`}>
      <div className={styles.layout_title}>
        {currentPath.length > 2 ? SubMenuList.find((subMenu) => subMenu.key === currentPath[2])?.label || '' : MenuList.find((menu) => menu.key === currentPath[1])?.label || ''}
      </div>
      {children}
    </div>
  );
};