import { Menu, SubMenu } from '@/constants/MenuList/interface';
import UsersIcon from '@/assets/users-solid.svg';
import PaymentIcon from '@/assets/money-check-dollar-pen-solid.svg';
import MarketingIcon from '@/assets/bullseye-pointer-solid.svg';
import MessageIcon from '@/assets/comment-lines-solid.svg';
import Dashboard from '@/assets/grid-horizontal-solid.svg';
import AdminManagement from '@/assets/user-gear-solid.svg';


export const MenuList: Menu[] = [
  {
    icon: <Dashboard/>,
    label: '대시보드',
    key: 'dashboard',
    hide: true
  },
  {
    icon: <UsersIcon/>,
    label: '고객 관리',
    key: 'users'
  },
  {
    icon: <PaymentIcon/>,
    label: '결제 관리',
    key: 'payments'
  },
  {
    icon: <MarketingIcon/>,
    label: '마케팅 관리',
    key: 'marketing'
  },
  {
    icon: <MessageIcon/>,
    label: '메시지 발송 현황',
    key: 'message'
  },
  {
    icon: <AdminManagement/>,
    label: '운영 관리',
    key: 'management'
  }
];

export const SubMenuList: SubMenu[] = [
  {
    label: '해피싱크 고객 관리',
    parent: 'users',
    key: 'happysync',
  },
  {
    label: '마케팅싱크 고객 관리',
    parent: 'users',
    key: 'marketingsync',
  },
  {
    label: '요금제 설정',
    parent: 'payments',
    key: 'rateplan',
  },
  {
    label: '결제 내역',
    parent: 'payments',
    key: 'receipt',
  },
  {
    label: 'APP 관리',
    parent: 'marketing',
    key: 'app',
  },
  {
    label: '프로모션 관리',
    parent: 'marketing',
    key: 'promotion',
  },
  {
    label: '운영 계정 관리',
    parent: 'management',
    key: 'admin'
  },
  {
    label: '서비스 점검 관리',
    parent: 'management',
    key: 'maintenance'
  }
]