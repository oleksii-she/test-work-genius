'use client';

import { useState, useEffect, useRef } from 'react';

import styles from './timer.module.css';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const Timer = ({
  className,
  itemClass,
  onPriceChange,
  dates,
}: {
  className?: string;
  itemClass?: string;
  onPriceChange?: (newPrice: number) => void;
  dates?: number[];
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [increments, setIncrements] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const stableOnPriceChange = useRef(onPriceChange);

  useEffect(() => {
    if (!dates || currentIndex >= dates.length) return;

    const targetDate = dates[currentIndex];
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance <= 0) {
        setIncrements((prev) => prev + 1);
        if (currentIndex + 1 < dates.length) {
          setCurrentIndex((i) => i + 1);
        } else {
          clearInterval(timer);
        }
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, dates]);

  useEffect(() => {
    stableOnPriceChange.current = onPriceChange;
  }, [onPriceChange]);

  useEffect(() => {
    if (increments > 0) {
      stableOnPriceChange.current?.(increments);
    }
  }, [increments]);

  return (
    <div className={`${styles.timer} timer ${className}`}>
      <div className={`${styles.timer_item} ${itemClass}`}>
        <p>{timeLeft.days}</p>
        <span>Днів</span>
      </div>
      <svg
        width="6"
        height="16"
        viewBox="0 0 6 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.85 5.7C4.41 5.7 5.7 4.41 5.7 2.85C5.7 1.29 4.41 0 2.85 0C1.29 0 0 1.29 0 2.85C0 4.41 1.29 5.7 2.85 5.7ZM2.85 15.9C4.41 15.9 5.7 14.61 5.7 13.05C5.7 11.49 4.41 10.2 2.85 10.2C1.29 10.2 0 11.49 0 13.05C0 14.61 1.29 15.9 2.85 15.9Z"
          fill="currentColor"
        />
      </svg>
      <div className={`${styles.timer_item} ${itemClass}`}>
        <p>{timeLeft.hours}</p>
        <span>Години</span>
      </div>
      <svg
        width="6"
        height="16"
        viewBox="0 0 6 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.85 5.7C4.41 5.7 5.7 4.41 5.7 2.85C5.7 1.29 4.41 0 2.85 0C1.29 0 0 1.29 0 2.85C0 4.41 1.29 5.7 2.85 5.7ZM2.85 15.9C4.41 15.9 5.7 14.61 5.7 13.05C5.7 11.49 4.41 10.2 2.85 10.2C1.29 10.2 0 11.49 0 13.05C0 14.61 1.29 15.9 2.85 15.9Z"
          fill="currentColor"
        />
      </svg>
      <div className={`${styles.timer_item} ${itemClass}`}>
        <p>{timeLeft.minutes}</p>
        <span>Хвилини</span>
      </div>
      <svg
        width="6"
        height="16"
        viewBox="0 0 6 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.85 5.7C4.41 5.7 5.7 4.41 5.7 2.85C5.7 1.29 4.41 0 2.85 0C1.29 0 0 1.29 0 2.85C0 4.41 1.29 5.7 2.85 5.7ZM2.85 15.9C4.41 15.9 5.7 14.61 5.7 13.05C5.7 11.49 4.41 10.2 2.85 10.2C1.29 10.2 0 11.49 0 13.05C0 14.61 1.29 15.9 2.85 15.9Z"
          fill="currentColor"
        />
      </svg>
      <div className={`${styles.timer_item} ${itemClass}`}>
        <p>{timeLeft.seconds}</p>
        <span>Секунд</span>
      </div>
    </div>
  );
};
