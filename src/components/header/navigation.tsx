'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useRouter } from 'next/navigation';
const data = [
  { id: 1, label: 'Спікери', href: '#speakers' },
  { id: 2, label: 'Програма', href: '#program' },
  { id: 3, label: 'Відгуки', href: '#reviews' },
  { id: 4, label: 'Записатись', href: '#signup' },
];

export const NavigationList = () => {
  const [activeHash, setActiveHash] = useState<string>('#speakers');
  const pathname = usePathname();
  const router = useRouter();

  //   useEffect(() => {

  //     const handleHashChange = () => {
  //       setActiveHash(window.location.hash || '#speakers');
  //     };

  //     window.addEventListener('hashchange', handleHashChange);
  //     return () => window.removeEventListener('hashchange', handleHashChange);
  //   }, [pathname]);

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
