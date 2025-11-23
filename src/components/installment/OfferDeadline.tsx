'use client';

import styles from './installmentSection.module.css';

function getDeadlinePlusTwoDays() {
  const now = new Date();
  const deadline = new Date(now);
  deadline.setDate(now.getDate() + 2);

  const day = deadline.getDate().toString();
  const monthNames = [
    'січня',
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня',
  ];
  const month = monthNames[deadline.getMonth()];

  return { day, month };
}

export const OfferDeadline = () => {
  const { day, month } = getDeadlinePlusTwoDays(); // обчислюємо одразу

  return (
    <div className={styles.deadlineWrapper}>
      <p>Пропозиція діє до:</p>
      <p>{day}</p>
      <p>{month}</p>
    </div>
  );
};
