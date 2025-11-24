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
    'Опануйте штучний інтелект з нуля: навчання, практика та заробіток у трендовій професії з Genius.Space',
  openGraph: {
    title: 'Genius Space',
    description:
      'Опануйте штучний інтелект з нуля: навчання, практика та заробіток у трендовій професії з Genius.Space',
    url: 'https://test-work-genius.vercel.app',
    siteName: 'Genius Space',
    images: [
      {
        url: '/logo.svg',
        width: 150,
        height: 150,
        alt: 'Genius Space AI Course',
      },
    ],
    type: 'website',
  },
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
