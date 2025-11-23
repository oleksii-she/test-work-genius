import styles from './page.module.css';

import { Hero } from '@/src/components/hero/hero';
import { SectionEducation } from '@/src/components/education/sectionEducation';
import { SectionPrice } from '@/src/components/price/sectionPrice';
import { SectionInstallment } from '@/src/components/installment/installmentSection';
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <SectionEducation />
        {/* <SectionPrice /> */}
        <SectionInstallment />
      </main>
    </div>
  );
}
