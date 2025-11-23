import styles from './banner.module.css';
import { Timer } from './timer';
export const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['banner_timer-wrapper']}>
        <p className={styles.desc}>
          До <span>підвищення</span> цін залишилося:
        </p>
        <Timer />
      </div>
      <div className={styles.wrapper__img}></div>

      <div>
        <div className={styles['manager-call']}>
          <p>
            <span>Бонус при купівлі курсу — </span>дочекайся дзвінка менеджера
          </p>
        </div>
      </div>
    </div>
  );
};
