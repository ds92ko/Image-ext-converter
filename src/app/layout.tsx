import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Image from 'next/image';
import 'boxicons/css/boxicons.min.css';
import '@/styles/reset.css';
import '@/styles/globals.css';
import logo from '@/assets/images/logo.png';

const notoSansKR = Noto_Sans_KR({ style: ['normal'], subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Image Converter',
  description: '이미지 확장자 변환 프로그램'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <header>
          <h1>
            <Image
              src={logo}
              alt="logo"
            />
            <strong>Image Converter</strong>
          </h1>
        </header>
        {children}
        <footer>&copy; Image Converter. All rights reserved.</footer>
      </body>
    </html>
  );
}
