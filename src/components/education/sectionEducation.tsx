'use client';

import styles from './education.module.css';

export function SectionEducation() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Пакети <span>навчання з AI</span>
        </h2>

        <div className={styles.plans}>
          {/* Standard */}
          <div className={styles.plans_wrapper}>
            <article
              className={`${styles.card} ${styles.radius_color_standard}`}
            >
              <div className={`${styles.cardHead} ${styles.standard_color_bg}`}>
                <h3>Standard</h3>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardBody__subtitle}>
                  Підійде тим, хто хоче:
                </p>
                <ul className={styles.cardList}>
                  <li>зрозуміти, що таке AI та звідки він з’явився</li>
                  <li>
                    дізнатися про найпопулярніші інструменти та як ними
                    користуватися
                  </li>
                  <li>навчитися застосовувати AI у житті</li>
                  <li>
                    опанувати базові навички: створення зображень і відео,
                    автоматизація процесів, написання промтів, робота з ChatGPT
                  </li>
                </ul>
              </div>
            </article>
            <p className={styles.card_signature}>
              Ідеально для тих, хто тільки починає знайомство з AI.
            </p>
          </div>

          {/* { Pro} */}
          <div className={styles.plans_wrapper}>
            <article className={`${styles.card} ${styles.radius_color_pro}`}>
              <div className={`${styles.cardHead} ${styles.pro_color_bg}`}>
                <h3>Pro</h3>
              </div>
              <div className={`${styles.cardBody}`}>
                <p className={styles.cardBody__subtitle}>
                  У цьому пакеті ви отримуєте:
                </p>
                <ul
                  className={`${styles.cardList} ${styles.cardBody_additional}`}
                >
                  <li>
                    <span
                      className={`${styles.dot} ${styles['dot_color--pro']}`}
                    ></span>{' '}
                    базовий блок з основами AI
                  </li>
                  <li>
                    <span
                      className={`${styles.dot} ${styles['dot_color--pro']}`}
                    ></span>{' '}
                    один напрям на вибір: AI у SMM, AI у маркетингу, генерація
                    фото та відео
                  </li>
                  <li>
                    <span
                      className={`${styles.dot} ${styles['dot_color--pro']}`}
                    ></span>{' '}
                    навчитися застосовувати AI у житті
                  </li>
                  <li>
                    <span
                      className={`${styles.dot} ${styles['dot_color--pro']}`}
                    ></span>{' '}
                    опанувати базові навички: створення зображень і відео,
                    автоматизація процесів, написання промтів, робота з ChatGPT
                  </li>
                </ul>
              </div>

              <div
                className={`${styles.cardBody} ${styles.cardBody_additional_bottom}`}
              >
                <p className={styles.cardBody__subtitle}>
                  Підійде тим, хто хоче:
                </p>
                <ul className={styles.cardList}>
                  <li>зрозуміти, що таке AI та звідки він з’явився</li>
                  <li>
                    дізнатися про найпопулярніші інструменти та як ними
                    користуватися
                  </li>
                  <li>навчитися застосовувати AI у житті</li>
                  <li>
                    опанувати базові навички: створення зображень і відео,
                    автоматизація процесів, написання промтів, робота з ChatGPT
                  </li>
                </ul>
              </div>
            </article>
            <p className={styles.card_signature}>
              Pro — це вибір для тих, хто не витрачає час на зайве, а одразу
              навчається AI у потрібному напрямі.
              <br /> <br />
              Ви отримаєте фундаментальні знання й зможете застосовувати штучний
              інтелект під свої завдання та цілі.
            </p>
          </div>
          {/* { Premium} */}
          <div className={styles.plans_wrapper}>
            <article
              className={`${styles.card} ${styles.radius_color_premium}`}
            >
              <div className={`${styles.cardHead} ${styles.premium_color_bg}`}>
                <h3>Premium</h3>
              </div>
              <div className={`${styles.cardBody}`}>
                <p className={styles.cardBody__subtitle}>
                  основи штучного інтелекту
                </p>
                <ul
                  className={`${styles.cardList} ${styles.cardBody_additional}`}
                >
                  <li>
                    <span
                      className={`${styles.dot} ${styles['dot_color--premium']}`}
                    ></span>{' '}
                    AI у SMM
                  </li>
                  <li>
                    <span
                      className={`${styles.dot} ${styles['dot_color--premium']}`}
                    ></span>{' '}
                    AI у маркетингу
                  </li>
                  <li>
                    <span
                      className={`${styles.dot} ${styles['dot_color--premium']}`}
                    ></span>{' '}
                    генерація фото та відео
                  </li>
                  <li>
                    <span
                      className={`${styles.dot} ${styles['dot_color--premium']}`}
                    ></span>{' '}
                    автоматизація
                  </li>
                </ul>
              </div>

              <div
                className={`${styles.cardBody} ${styles.cardBody_additional_bottom}`}
              >
                <p className={styles.cardBody__subtitle}>
                  Пакет підійде тим, хто:
                </p>
                <ul className={styles.cardList}>
                  <li>
                    підприємців, які хочуть масштабувати бізнес за допомогою AI
                  </li>
                  <li>
                    спеціалістів, які планують прокачати професійні навички та
                    стати більш затребуваними
                  </li>
                  <li>
                    тих, хто хоче почати власну справу й одразу будувати її з
                    використанням новітніх інструментів
                  </li>
                  <li>
                    людей, які прагнуть комплексно вивчити штучний інтелект і
                    зрозуміти, як застосувати його в різних сферах
                  </li>
                </ul>
              </div>
            </article>
            <p className={styles.card_signature}>
              Premium — це можливість отримати повну картину світу AI та
              впевнено використовувати його у будь-якому напрямі.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
