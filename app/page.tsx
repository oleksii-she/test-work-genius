import styles from './page.module.css';

import { Hero } from '@/src/components/hero/hero';
import { SectionEducation } from '@/src/components/education/sectionEducation';
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <SectionEducation />
      </main>
    </div>
  );
}
