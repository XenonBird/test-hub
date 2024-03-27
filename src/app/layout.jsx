import { Inter } from 'next/font/google';
import '@flaticon/flaticon-uicons/css/all/all.css';
import './globals.css';

import { Toaster } from 'react-hot-toast';
import { appTitle, appDescription } from '@/visual-data/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: appTitle,
  description: appDescription,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
