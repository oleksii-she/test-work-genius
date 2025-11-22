import styles from './header.module.css';
import Image from 'next/image';
import { NavigationList } from './navigation';
import { MobileMenu } from './mobileMenu';
export const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Image
        src="logo.svg"
        width={96}
        height={40}
        alt="Genius space"
        className="logo"
      />
      <nav className={'navigation navigation-desktop-active'}>
        <NavigationList />
      </nav>

      <button
        className={`${styles.activeButton} button-course button-course-hover mobile-hide`}
      >
        Записатися на курс
      </button>
      <MobileMenu />
    </header>
  );
};
