import LottiePlayer from '@/components/ui/lottie-player';
import MainAnimation from '../../../public/lotties/main.json';
import Emoji1Animation from '../../../public/lotties/emoji_1.json';
import Emoji2Animation from '../../../public/lotties/emoji_2.json';
import Emoji3Animation from '../../../public/lotties/emoji_3.json';
import Emoji4Animation from '../../../public/lotties/emoji_4.json';
import { button } from '@/styles/forms.css';
import { container, sectionDescription, sectionSubTitle, sectionTitle } from '@/styles/layout.css';
import Link from 'next/link';
import { introSection, textBox, lottieBox, startSection } from '@/app/(main)/page.css';
import { flexBox, textWhite } from '@/styles/globals.css';
import { Card, CardList } from '@/styles/ui.css';

export default function Page() {
  return (
    <div>
      <section className={introSection}>
        <div className={`${container} ${flexBox} between center`}>
          <div className={textBox}>
            <h2 className={sectionTitle}>온라인 이미지 변환기</h2>
            <p className={sectionDescription}>
              더 이상 번거로운 소프트웨어 설치 없이,
              <br />
              언제 어디서든 간편하게 이미지 확장자를 무료로 변환해보세요 😎
            </p>
            <Link
              href="/converter"
              className={button}
            >
              시작하기
            </Link>
          </div>
          <div className={`${lottieBox} intro`}>
            <LottiePlayer animationData={MainAnimation} />
          </div>
        </div>
      </section>
      <section>
        <div className={container}>
          <h2 className={sectionSubTitle}>Why Somverter?</h2>
          <ul className={CardList}>
            <li className={Card}>
              <div className={lottieBox}>
                <LottiePlayer animationData={Emoji1Animation} />
              </div>
              <div>
                <h3 className={sectionSubTitle}>어렵지 않아요 👍</h3>
                <p className={sectionDescription}>
                  간단한 조작으로 쉽고 간편하게 이미지 파일을 변환할 수 있어요
                </p>
              </div>
            </li>
            <li className={Card}>
              <div className={lottieBox}>
                <LottiePlayer animationData={Emoji2Animation} />
              </div>
              <div>
                <h3 className={sectionSubTitle}>번거롭지 않아요 🌐</h3>
                <p className={sectionDescription}>
                  별도의 프로그램 설치 없이, 언제 어디서든 온라인에서 사용할 수 있어요
                </p>
              </div>
            </li>
            <li className={Card}>
              <div className={lottieBox}>
                <LottiePlayer animationData={Emoji3Animation} />
              </div>
              <div>
                <h3 className={sectionSubTitle}>무료에요 💸</h3>
                <p className={sectionDescription}>
                  JPEG, PNG, WEBP, SVG, GIF 파일을 무료로 변환할 수 있어요
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className={startSection}>
        <div className={container}>
          <div className={lottieBox}>
            <LottiePlayer animationData={Emoji4Animation} />
          </div>
          <h2 className={`${sectionTitle} ${textWhite}`}>Ready to get started?</h2>
          <p className={`${sectionDescription} ${textWhite}`}>
            지금 바로 이미지 변환을 시작하세요!
          </p>
          <a
            href="/converter"
            className={`${button} reverse center`}
          >
            변환하기
          </a>
        </div>
      </section>
    </div>
  );
}
