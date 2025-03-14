import styles from './styles.module.css';

import { useNavigation } from '@/context/NavigationContext';
import OpenBarIcon from '@/assets/bars-solid.svg'
import Image from 'next/image';
import Link from 'next/link';


export const Header = () => {
  const { toggleNav } = useNavigation();
  return (
    <div
      className={styles.header_container}>
      <div className={styles.header_navigation_open_button} onClick={() => toggleNav()}>
        <OpenBarIcon/>
      </div>
      <Link
        href={'/dashboard'}
      >
        <Image
          className={styles.logo}
          src={'/logo.svg'}
          alt={'Happysync'}
          width={120}
          height={36}
          priority
        />
      </Link>

    </div>
  );
};