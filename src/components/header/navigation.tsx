'use client';
import { useState } from 'react';
import Link from 'next/link';

const data = [
  { id: 1, label: 'Спікери', href: '#speakers' },
  { id: 2, label: 'Програма', href: '#program' },
  { id: 3, label: 'Відгуки', href: '#reviews' },
  { id: 4, label: 'Записатись', href: '#signup' },
];

export const NavigationList = () => {
  const [activeHash, setActiveHash] = useState<string>('#speakers');

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <Link
            href={`/${item.href}`}
            onClick={() => {
              setActiveHash(item.href);
            }}
            className={activeHash === item.href ? 'active' : ''}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
