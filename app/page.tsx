import styles from './page.module.css';

import { Hero } from '@/src/components/hero/hero';
import { SectionEducation } from '@/src/components/education/sectionEducation';
import { SectionPrice } from '@/src/components/price/sectionPrice';
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <SectionEducation />
        <h2>test</h2>
        <SectionPrice />
      </main>
    </div>
  );
}
