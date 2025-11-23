import styles from './sectionPrice.module.css';
import { Banner } from './banner';
import { Timer } from './timer';

export type PlanKey = 'standard' | 'pro' | 'premium';

export type FeatureValue = boolean | number | string;

export interface Feature {
  id: string;
  title: string;
  description?: { id: string; text: string }[];
  values: Record<PlanKey, FeatureValue>;
}

const features: Feature[] = [
  {
    id: 'basic_course',
    title: 'Доступ до Базового курсу з 13 уроків',
    description: [
      {
        id: 'basic_course-desc-1',
        text: 'Навчитесь користуватися популярними нейромережами',
      },
      { id: 'basic_course-desc-2', text: 'Опануєте основи автоматизації' },
    ],
    values: {
      standard: true,
      pro: true,
      premium: true,
    },
  },
  {
    id: 'curator',
    title: 'Куратор, для швидкого росту',
    description: [
      {
        id: 'curator-desc-1',
        text: 'Навчитесь користуватися популярними нейромережами',
      },
      { id: 'curator-desc-2', text: 'Опануєте основи автоматизації' },
      { id: 'curator-desc-3', text: 'Опануєте основи автоматизації' },
      { id: 'curator-desc-4', text: 'Опануєте основи автоматизації' },
      { id: 'curator-desc-5', text: 'Опануєте основи автоматизації' },
      { id: 'curator-desc-6', text: 'Опануєте основи автоматизації' },
    ],
    values: {
      standard: false,
      pro: true,
      premium: true,
    },
  },
  {
    id: 'telegram_chat',
    title: 'Чат в Telegram з кураторами та ментором',
    values: {
      standard: false,
      pro: true,
      premium: true,
    },
  },
  {
    id: 'chatgpt_bonus',
    title: 'Бонусний курс по ChatGPT',
    values: {
      standard: true,
      pro: true,
      premium: true,
    },
  },
  {
    id: 'test_tasks',
    title: 'Тестові завдання на закріплення знань',
    values: {
      standard: '1 місяць',
      pro: '6 місяців',
      premium: '12 місяців',
    },
  },
  {
    id: 'other',
    title: '',
    values: {
      standard: false,
      pro: 2,
      premium: 4,
    },
  },
  {
    id: 'qa_sessions',
    title: 'Q&A-сесії',
    values: {
      standard: false,
      pro: 2,
      premium: 8,
    },
  },
  {
    id: 'workshops',
    title: 'Воркшопи зі спікером',
    values: {
      standard: false,
      pro: true,
      premium: true,
    },
  },
  {
    id: 'homework_review',
    title: 'Перевірка ДЗ',
    values: {
      standard: false,
      pro: true,
      premium: true,
    },
  },
  {
    id: 'special_block',
    title: 'Доступ до спеціалізованого блоку',
    values: {
      standard: false,
      pro: 'Обираєте 1 спецблок',
      premium: 'Доступ до усього навчання',
    },
  },
  {
    id: 'certificate',
    title: 'Сертифікат про проходження курсу',
    values: {
      standard: false,
      pro: true,
      premium: true,
    },
  },
  {
    id: 'post_support',
    title: 'Підтримка кураторами після навчання',
    values: {
      standard: false,
      pro: false,
      premium: '3 місяці',
    },
  },
  {
    id: 'genius_talents',
    title: 'Доступ до Genius Talents',
    values: {
      standard: false,
      pro: false,
      premium: true,
    },
  },
  {
    id: 'ai_community',
    title: 'Доступ до спільноти AI спеціалістів (XXX учасників)',
    values: {
      standard: false,
      pro: false,
      premium: true,
    },
  },
];

export type SubscriptionType = 'standard' | 'pro' | 'premium';

export interface IPrice {
  id: number;
  price: string;
  oldPrice: string;
  subscription: SubscriptionType;
  available: number;
  maxPlace: number;
}

export const priceData: IPrice[] = [
  {
    id: 1,
    price: '7 560',
    oldPrice: '16 000',
    subscription: 'standard',
    available: 25,
    maxPlace: 145,
  },
  {
    id: 2,
    price: '10 080',
    oldPrice: '24 000',
    subscription: 'pro',
    available: 25,
    maxPlace: 145,
  },
  {
    id: 3,
    price: '13 860',
    oldPrice: '28 000',
    subscription: 'premium',
    available: 25,
    maxPlace: 145,
  },
];

export const SectionPrice = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles['container']} container`}>
        {/*       <Banner /> */}

        <div className={styles.content_wrapper}>
          <div className={styles['wrapper']}>
            <p className={styles.wrapper__title}>
              <span>Оберіть</span> свій формат участі
            </p>
            <div className={styles.cardsWrapper}>
              {/* Left card */}
              <div className={styles.card}>
                <div className={styles.bonus}>+ BONUS</div>
                <h3 className={styles.cardTitle}>Standart</h3>
                <p className={styles.cardText}>Бонуси уточнюйте у менеджера</p>
              </div>

              {/* Middle card (overlapping) */}
              <div className={`${styles.cardPro}`}>
                <div className={styles.bonusPro}>+ BONUS</div>
                <div className={styles.ribbon_wrapper}>
                  <h3 className={styles.cardTitle}>Pro</h3>
                  <p className={styles.cardTextPro}>
                    Бонуси уточнюйте у менеджера
                  </p>
                </div>
              </div>

              {/* Right card */}
              <div className={styles.card}>
                <div className={`${styles.bonus} ${styles.bonusPremiumBg}`}>
                  + BONUS
                </div>
                <h3 className={styles.cardTitle}>Premium</h3>
                <p className={styles.cardText}>Бонуси уточнюйте у менеджера</p>
              </div>
            </div>
          </div>
          <table className={styles.table}>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.id}>
                  <td className={styles.feature_info}>
                    <strong>
                      {feature.title}

                      {feature.title.length > 5 && feature.description && (
                        <div className={styles.feature_info_icon_wrapper}>
                          <button className={styles.feature_info_btn}>
                            <svg
                              className={styles.feature_info_icon}
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.5">
                                <path
                                  d="M6.41848 5.4418C6.41848 5.21062 6.23105 5.02319 5.99987 5.02319C5.76869 5.02319 5.58127 5.21062 5.58127 5.4418V8.79064C5.58127 9.02182 5.76869 9.20924 5.99987 9.20924C6.23105 9.20924 6.41848 9.02182 6.41848 8.79064V5.4418Z"
                                  fill="black"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31373 2.68629 12 6 12C9.31373 12 12 9.31373 12 6C12 2.68629 9.31373 0 6 0ZM0.837209 6C0.837209 3.14867 3.14867 0.837209 6 0.837209C8.85131 0.837209 11.1628 3.14867 11.1628 6C11.1628 8.85131 8.85131 11.1628 6 11.1628C3.14867 11.1628 0.837209 8.85131 0.837209 6Z"
                                  fill="black"
                                />
                                <path
                                  d="M6.55814 3.76737C6.55814 4.07562 6.30826 4.32551 6 4.32551C5.69174 4.32551 5.44186 4.07562 5.44186 3.76737C5.44186 3.45912 5.69174 3.20923 6 3.20923C6.30826 3.20923 6.55814 3.45912 6.55814 3.76737Z"
                                  fill="black"
                                />
                              </g>
                            </svg>
                          </button>
                          {feature.description && (
                            <div className={styles.feature_tooltip}>
                              <div className={styles.tooltip_arrow}></div>
                              <ul>
                                {feature.description.map((desc) => (
                                  <li key={desc.id}>{desc.text}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </strong>
                  </td>
                  <td>
                    {(() => {
                      const value = feature.values.standard;

                      if (value === true) {
                        return (
                          <div className={styles.checkWrapper}>
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 0C6.28009 0 0 6.28009 0 14C0 21.7199 6.28009 28 14 28C21.7199 28 28 21.7199 28 14C28 6.28009 21.7199 0 14 0ZM21.0957 11.0332L13.5123 18.6164C13.2848 18.8439 12.9861 18.9584 12.6875 18.9584C12.3889 18.9584 12.0902 18.8439 11.8627 18.6164L8.07111 14.8248C7.61481 14.3687 7.61481 13.6313 8.07111 13.1752C8.52719 12.7189 9.2644 12.7189 9.7207 13.1752L12.6875 16.142L19.4461 9.38361C19.9022 8.92731 20.6394 8.92731 21.0957 9.38361C21.5518 9.83969 21.5518 10.5769 21.0957 11.0332Z"
                                fill="#FEA800"
                              />
                            </svg>
                          </div>
                        );
                      }

                      if (value === false) {
                        return <p>-</p>;
                      }

                      return value;
                    })()}
                  </td>

                  <td>
                    {(() => {
                      const value = feature.values.pro;

                      if (value === true) {
                        return (
                          <div className={styles.checkWrapper}>
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 0C8.97156 0 0 8.97156 0 20C0 31.0284 8.97156 40 20 40C31.0284 40 40 31.0284 40 20C40 8.97156 31.0284 0 20 0ZM30.1367 15.7617L19.3033 26.5948C18.9783 26.9199 18.5516 27.0834 18.125 27.0834C17.6984 27.0834 17.2717 26.9199 16.9467 26.5948L11.5302 21.1783C10.8783 20.5267 10.8783 19.4733 11.5302 18.8217C12.1817 18.1699 13.2349 18.1699 13.8867 18.8217L18.125 23.06L27.7802 13.4052C28.4317 12.7533 29.4849 12.7533 30.1367 13.4052C30.7883 14.0567 30.7883 15.1099 30.1367 15.7617Z"
                                fill="#8B57C2"
                              />
                            </svg>
                          </div>
                        );
                      }

                      if (value === false) {
                        return '–';
                      }

                      return value;
                    })()}
                  </td>
                  <td>
                    {(() => {
                      const value = feature.values.premium;

                      if (value === true) {
                        return (
                          <div className={styles.checkWrapper}>
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 0C6.28009 0 0 6.28009 0 14C0 21.7199 6.28009 28 14 28C21.7199 28 28 21.7199 28 14C28 6.28009 21.7199 0 14 0ZM21.0957 11.0332L13.5123 18.6164C13.2848 18.8439 12.9861 18.9584 12.6875 18.9584C12.3889 18.9584 12.0902 18.8439 11.8627 18.6164L8.07111 14.8248C7.61481 14.3687 7.61481 13.6313 8.07111 13.1752C8.52719 12.7189 9.2644 12.7189 9.7207 13.1752L12.6875 16.142L19.4461 9.38361C19.9022 8.92731 20.6394 8.92731 21.0957 9.38361C21.5518 9.83969 21.5518 10.5769 21.0957 11.0332Z"
                                fill="#5B9AFF"
                              />
                            </svg>
                          </div>
                        );
                      }

                      if (value === false) {
                        return '–';
                      }

                      return value;
                    })()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles['price-wrapper']}>
          <div className={styles['timer-block']}>
            <p>
              До <span>підвищення</span> цін залишилося:
            </p>
            {/*       <Timer
              className={`${styles.timer}`}
              itemClass={styles.timer_item}
            /> */}
          </div>
          <div className={styles['price-block']}>
            {priceData.map((item) => (
              <div key={item.id} className={styles['price-block__price']}>
                <p className={styles['old-price']}>
                  <span>{item.oldPrice}</span> грн
                </p>
                <p
                  className={`${styles['new-price']} ${
                    styles[`color-${item.subscription}`]
                  }`}
                >
                  <span>{item.price}</span>грн
                </p>
                <button className={styles[`bg-color-${item.subscription}`]}>
                  Залишити заявку
                </button>
                <p
                  className={`${styles['price-block_desc']} ${
                    styles[`color-${item.subscription}`]
                  }`}
                >
                  Залишилось місць <span>{item.available}</span> з{' '}
                  {item.maxPlace}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
