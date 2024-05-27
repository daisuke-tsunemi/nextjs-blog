import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/pages/home.module.scss";
export default function About() {
  return (
    <section className={`${styles.p_about} ${"p_section"}`}>
      <div className='p_section__head'>
        <h2 className='c-txt c-txt--center p_section__title'>About us<span className='c-txt__md'>私たちについて</span></h2>
      </div>
      <div className='l-container__600'>
        <div className='p_section__body'>
          <Image
            src='/images/home/left.webp'
            height={400}
            width={600}
            alt="常見大祐のイメージ1"
            className={styles.p_about__imgLeft}
          />
          <div className={styles.p_about__text}>
            <h3 className='c-txt__lg c-txt--center'>ユーザーを、ビジネスを、ミツメルデザイン</h3>
            <p className='c-txt__md u-mt24'>
              はじめまして、ミツメルデザインのつねみと申します！<br />
              私たちはWeb、グラフィックデザイン開発を通じて、ビジネスの成果を最大化することに情熱を注いでいます。<br />
              ミツメルデザインのアプローチは、ビジネスの目標や戦略に沿った効果的なデザインを提供し、ユーザーとビジネスの両方にフォーカス、効果的なデザインを提供することです。<br />お困りの際は、ぜひお気軽にご相談ください。ビジネスの価値を共に創り上げましょう。
            </p>
          </div>
          <Image
            src='/images/home/right.webp'
            height={200}
            width={300}
            alt="常見大祐のイメージ2"
            className={styles.p_about__imgRight}
          />
        </div>
        <div className='p_section__foot u-align center'>
          <Link className='c-btn__line lg' href="/about">詳しく見る</Link>
        </div>
      </div>
    </section>
  )
}