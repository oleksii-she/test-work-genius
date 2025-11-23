import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationList } from './navigation';
import { MobileMenu } from './mobileMenu';
export const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Link href={'/'}>
        <Image
          src="logo.svg"
          width={96}
          height={40}
          alt="Genius space"
          className="logo"
        />
      </Link>
      <nav className={'navigation navigation-desktop-active'}>
        <NavigationList />
      </nav>

      <Link
        href={'#course'}
        className={`${styles.activeButton} button-course button-course-hover mobile-hide`}
      >
        Записатися на курс
      </Link>
      <MobileMenu />
    </header>
  );
};
