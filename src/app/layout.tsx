import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Luga Suga ',
  description: 'Place to buy cloths online',
};
const myFont = localFont({
  src: [
    {
      path: '../../public/fonts/TomatoGrotesk-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TomatoGrotesk-Light.otf',
      weight: '300',
      style: 'thin',
    },
    {
      path: '../../public/fonts/TomatoGrotesk-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-tomato',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={myFont.variable}>{children}</body>
    </html>
  );
}
