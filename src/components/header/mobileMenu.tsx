

import styles from './mobileMenu.module.css';
import { NavigationList } from './navigation';
export const MobileMenu = () => { 


    return (
      <div className={styles.mobileMenu}>
            <div style={{zIndex:150}} className={styles.hamburger}></div>
        <div className={styles.mobileModal}>
          <nav className="navigation">
            <NavigationList />
          </nav>
        </div>
      </div>
    );
}