import { MouseEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.css';

import { useNavigation } from '@/context/NavigationContext';
import { MenuList, SubMenuList } from '@/constants/MenuList';
import DropDownIcon from '@/assets/triangle-solid.svg';

export const Navigation = () => {
  const { isNavOpen, toggleNav, openSubMenus, toggleSubMenu } = useNavigation();
  const router = useRouter(); // 현재 페이지 정보 가져오기
  const currentPath = router.pathname.split('/'); // 현재 URL 경로
  return (
    <div
      className={`${styles.navigation_container} ${isNavOpen ? styles.navigation_expanded : styles.navigation_collapsed}`}>
      {MenuList.filter((menu) => !menu.hide).map((menu) => (
        <div key={menu.key}>
          <Link href={`/${menu.key}/${SubMenuList.find((subMenu) => subMenu.parent === menu.key)?.key || ''}`}>
            <div
              className={
                `${styles.navigation_menu} ${isNavOpen ? styles.navigation_expanded_menu : styles.navigation_collapsed_menu} ${(currentPath[1] || '') === menu.key ? styles.active : ''}`
              }
              onClick={() => {
                toggleNav(true);
                toggleSubMenu(menu.key, true);
              }}
            >
              <div className={styles.navigation_menu_item}>
                {menu.icon}
                <div className={`${styles.navigation_menu_label} ${isNavOpen ? styles.expanded : ''}`}>
                  {menu.label}
                </div>
              </div>
              {!!SubMenuList.filter((subMenu) => subMenu.parent === menu.key).length && (
                <DropDownIcon
                  className={`${styles.dropdown} ${isNavOpen && openSubMenus[menu.key] ? styles.expanded : ''}`}
                  onClick={(e: MouseEvent<SVGSVGElement>) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleSubMenu(menu.key);
                  }}
                />)}
            </div>
          </Link>
          {!!SubMenuList.filter((subMenu) => subMenu.parent === menu.key).length && (
            <div
              className={`${styles.navigation_sub_menu} ${isNavOpen && openSubMenus[menu.key] ? styles.expanded : ''}`}>
              {SubMenuList.filter((subMenu) => subMenu.parent === menu.key).map((subMenu) => (
                <Link
                  key={subMenu.key}
                  href={`/${menu.key}/${subMenu.key}`}>
                  <div
                    className={`${styles.navigation_sub_menu_label} ${(currentPath[2] || '') === subMenu.key ? styles.active : ''}`}
                    onClick={() => {
                    }}>
                    {subMenu.label}
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
};