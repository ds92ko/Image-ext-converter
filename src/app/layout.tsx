import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import 'boxicons/css/boxicons.min.css';
import '@/styles/reset.css';
import '@/styles/globals.css';
import ThemeProvider from '@/context/ThemeProvider';
import { layout, main, scrollArea } from '@/styles/layout.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const notoSans = Noto_Sans({ style: ['normal'], subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Somverter',
  description: '이미지 확장자 변환 프로그램'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
    >
      <body className={notoSans.className}>
        <ThemeProvider>
          <div className={layout}>
            <Header />
            <main className={main}>
              <div className={scrollArea}>{children}</div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
