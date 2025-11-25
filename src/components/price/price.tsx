'use client';
import { useState } from 'react';
import { Timer } from './timer';
import styles from './sectionPrice.module.css';

export type SubscriptionType = 'standard' | 'pro' | 'premium';

export interface IPrice {
  id: number;
  basePrice: number;
  oldPrice: number;
  subscription: SubscriptionType;
  available: number;
  maxPlace: number;
  price?: string;
}

const initialPriceData: IPrice[] = [
  {
    id: 1,
    basePrice: 7560,
    oldPrice: 16000,
    subscription: 'standard' as SubscriptionType,
    available: 25,
    maxPlace: 145,
  },
  {
    id: 2,
    basePrice: 10080,
    oldPrice: 24000,
    subscription: 'pro' as SubscriptionType,
    available: 25,
    maxPlace: 145,
  },
  {
    id: 3,
    basePrice: 13860,
    oldPrice: 28000,
    subscription: 'premium' as SubscriptionType,
    available: 25,
    maxPlace: 145,
  },
];

const INCREASE_DATES = [
  new Date('2025-11-28T23:59:59').getTime(),
  new Date('2025-12-05T23:59:59').getTime(),
  new Date('2025-12-12T23:59:59').getTime(),
  new Date('2025-12-19T23:59:59').getTime(),
];

// test
// export const INCREASE_DATES = [
//   new Date('2025-11-25T14:22:00').getTime(),
//   new Date('2025-11-25T14:23:00').getTime(),
//   new Date('2025-11-25T14:24:00').getTime(),
//   new Date('2025-11-25T14:50:00').getTime(),
// ];

function getCurrentPrice(basePrice: number): string {
  const now = Date.now();
  let increments = 0;

  for (const date of INCREASE_DATES) {
    if (now > date) increments++;
  }

  return (basePrice + increments * 1000).toLocaleString('uk-UA');
}

export const Price = () => {
  const [prices, setPrices] = useState<IPrice[]>(
    initialPriceData.map((item) => ({
      ...item,
      price: getCurrentPrice(item.basePrice),
    }))
  );

  const handlePriceChange = () => {
    setPrices(
      initialPriceData.map((item) => ({
        ...item,
        price: getCurrentPrice(item.basePrice),
      }))
    );
  };

  return (
    <div className={styles['price-wrapper']}>
      <div className={styles['timer-block']}>
        <p>
          До <span>підвищення</span> цін залишилося:
        </p>
        <Timer
          className={styles.timer}
          itemClass={styles.timer_item}
          onPriceChange={handlePriceChange}
          dates={INCREASE_DATES}
        />
      </div>
      <div className={styles['price-block']}>
        {prices.map((item) => (
          <div key={item.id} className={styles['price-block__price']}>
            <p className={styles['old-price']}>
              <span>{item.oldPrice.toLocaleString('uk-UA')}</span> грн
            </p>
            <p
              className={`${styles['new-price']} ${
                styles[`color-${item.subscription}`]
              }`}
            >
              <span>{item.price}</span> грн
            </p>
            <button className={styles[`bg-color-${item.subscription}`]}>
              Залишити заявку
            </button>
            <p
              className={`${styles['price-block_desc']} ${
                styles[`color-${item.subscription}`]
              }`}
            >
              Залишилось місць <span>{item.available}</span> з {item.maxPlace}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
