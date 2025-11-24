'use client';

import { useState, useEffect } from 'react';
import styles from './mobileMenu.module.css';
import { NavigationList } from './navigation';
import { useRouter } from 'next/navigation';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  return (
    <div className={styles.mobileMenu}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.buttonBurger}
      >
        <div
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
        ></div>
      </button>

      <div className={`${styles.mobileModal} ${isOpen ? styles.isActive : ''}`}>
        <nav className="navigation">
          <NavigationList />
        </nav>
        <button
          className="button-course"
          onClick={() => {
            setIsOpen(false);
            router.push('#course');
          }}
        >
          Записатися на курс
        </button>
      </div>
    </div>
  );
};
