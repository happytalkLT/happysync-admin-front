import { createContext, ReactNode, useContext, useState } from 'react';

interface NavigationContextType {
  isNavOpen: boolean;
  toggleNav: (flag?: boolean) => void;
  openSubMenus: Record<string, boolean>;
  toggleSubMenu: (menuId: string, flag?: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({}); // 각 서브메뉴 상태 관리

  // 전체 네비게이션 열기/닫기 flag 값이 있다면 메뉴 클릭을 통한 열림 상태 변경
  const toggleNav = (flag? : boolean) => setIsNavOpen((prev) => {
    if (typeof flag === 'boolean') return flag
    return !prev;
  });

  // 특정 서브메뉴 열기/닫기 flag 값이 있다면 메뉴 클릭을 통한 열림 상태 변경 및 menuId 값만 flag로 설정, 나머지는 false
  const toggleSubMenu = (menuId: string, flag?: boolean) => {
    setOpenSubMenus((prev) => {
      if (typeof flag === 'boolean' && prev[menuId] === undefined) {
        prev[menuId] = flag
      }
      if (typeof flag === 'boolean') {
        return Object.keys(prev).reduce((acc, key) => {
          acc[key] = key === menuId ? flag : false; // menuId만 flag 값을 적용, 나머지는 false
          return acc;
        }, {} as Record<string, boolean>);
      }

      return {
        ...prev,
        [menuId]: !prev[menuId], // flag 값이 없으면 기존 상태 반전
      };
    });
  };

  return (
    <NavigationContext.Provider value={{ isNavOpen, toggleNav, openSubMenus, toggleSubMenu }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};