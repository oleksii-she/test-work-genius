import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import { Header } from '@/src/components/header/header';
import { Footer } from '@/src/components/footer/footer';
const gilroy = localFont({
  src: [
    { path: './fonts/Gilroy-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Gilroy-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/Gilroy-Semibold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/Gilroy-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-gilroy',
});

export const metadata: Metadata = {
  title: 'Genius Space',
  description:
    'AI Для новачків з 0 до повного опанування професії та результату MoneyMaker Опануйте трендовий напрямок, збільште ефективність у своїй роботі та почніть заробляти набагато більше за допомогою штучного інтелекту',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={gilroy.variable}
      data-lt-installed="true"
      suppressHydrationWarning={true}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
