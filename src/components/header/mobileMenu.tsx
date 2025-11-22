'use client';
import { useState } from 'react';
import styles from './mobileMenu.module.css';
import { NavigationList } from './navigation';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      </div>
    </div>
  );
};
