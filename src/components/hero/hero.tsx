import Image from 'next/image';
import styles from './hero.module.css';
export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_wrapper}>
          <div className={styles['hero_wrapper__text-block']}>
            <ul className={styles['list-course']}>
              <li>
                <div>
                  <Image
                    src={'images/hero/calendar_today.svg'}
                    width={17}
                    height={17}
                    alt="calendar"
                  />
                </div>
                3 місяці
              </li>
              <li>
                <div>
                  <Image
                    src={'images/hero/globe.svg'}
                    width={17}
                    height={17}
                    alt="calendar"
                  />
                </div>
                online
              </li>
              <li>
                <div>
                  <Image
                    src={'images/hero/flag.svg'}
                    width={17}
                    height={17}
                    alt="calendar"
                  />
                </div>
                1-й потік
              </li>
            </ul>

            <div className={styles['hero__title-block']}>
              <h1>AI</h1>
              <p>
                Для новачків <span>з 0 до повного опанування професії</span> та
                результату
              </p>
            </div>
            <div className={styles['hero__subtitle-block']}>
              <h2>MoneyMaker</h2>
              <p>
                Опануйте трендовий напрямок,{' '}
                <span>
                  збільште ефективність у своїй роботі та почніть заробляти
                  набагато більше за допомогою штучного інтелекту
                </span>
              </p>
              <button className="button-course bg-violet">
                Записатися на курс
              </button>
            </div>
          </div>
          <div className={styles['hero_wrapper__image-block']}>
            <div className={styles['hero__image-block__decor--1']}></div>
            <div className={styles['hero__image-block__decor--2']}></div>
            <div className={styles['hero__image-block__decor--3']}></div>
            <div className={styles['hero__image-block__decor--4']}></div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};
