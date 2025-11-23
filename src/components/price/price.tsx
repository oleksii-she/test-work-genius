'use client';
import { useState } from 'react';
import { Timer } from './timer';
import styles from './sectionPrice.module.css';

export type SubscriptionType = 'standard' | 'pro' | 'premium';

export interface IPrice {
  id: number;
  price: string;
  oldPrice: string;
  subscription: SubscriptionType;
  available: number;
  maxPlace: number;
}

const initialPriceData: IPrice[] = [
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

export const Price = () => {
  const [prices, setPrices] = useState<IPrice[]>(initialPriceData);

  const handlePriceChange = (increments: number) => {
    setPrices((prev) =>
      prev.map((item) => ({
        ...item,
        price: (
          parseInt(item.price.replace(/\s/g, '')) +
          increments * 1000
        ).toLocaleString(),
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
          className={`${styles.timer}`}
          itemClass={styles.timer_item}
          onPriceChange={handlePriceChange}
        />
      </div>
      <div className={styles['price-block']}>
        {prices.map((item) => (
          <div key={item.id} className={styles['price-block__price']}>
            <p className={styles['old-price']}>
              <span>{item.oldPrice}</span> грн
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
