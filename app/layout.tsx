import '@/styles/globals.css';
import type { Metadata } from 'next';
import { clsx } from 'clsx';

export const metadata: Metadata = {
  title: 'خبير عقار',
  description: 'منصة تحليل عقاري ذكية'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={clsx('bg-gray-50 text-gray-900 font-sans')}>
        {children}
      </body>
    </html>
  );
}
