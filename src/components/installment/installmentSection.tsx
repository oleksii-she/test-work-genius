import styles from './installmentSection.module.css';
export const SectionInstallment = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.wrapper}>
          <div className={styles.wrapper_block1}>
            <h2>
              Розстрочка без переплат <span>від Genius.Space</span>
            </h2>
            <p>
              Почніть навчатися вже зараз, оплату робіть частинами. Комфортний
              формат розстрочки: від 2 до 12 місяців*
            </p>
          </div>
          <div>
            <p>Пропозиція діє до:</p>
            <p>14</p>
            <p>лютого</p>
          </div>

          <div>
            <p>Як отримати розстрочку?</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
