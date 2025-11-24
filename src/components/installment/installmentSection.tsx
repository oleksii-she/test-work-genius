import Image from 'next/image';
import styles from './installmentSection.module.css';
import { OfferDeadline } from './OfferDeadline';
export const SectionInstallment = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_block_left}>
            <h2>
              Розстрочка <br />
              без переплат <br />
              <span>від Genius.Space</span>
            </h2>
            <p>
              Почніть навчатися вже зараз, оплату робіть частинами. Комфортний
              формат розстрочки: <span>від 2 до 12 місяців*</span>
            </p>
          </div>
          <OfferDeadline />

          <div className={styles.wrapper_block_right}>
            <p>Як отримати розстрочку?</p>
            <ul>
              <li>Залишіть заявку на участь та переходьте до оплати</li>
              <li>Вибери спосіб оплати у розстрочку (WayForPay)</li>
              <li>Оплачуйте частинами без переплат через:</li>
            </ul>
            <div className={styles['banks-wrapper']}>
              <Image
                src={'/privatBank.svg'}
                alt="privat bank"
                width={115}
                height={21}
                unoptimized
              />
              <Image
                src={'/monoBank.png'}
                alt="monoBank"
                width={187}
                height={17}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
