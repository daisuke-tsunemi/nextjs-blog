import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/pages/home.module.scss";
export default function About() {
  return (
    <section className={`${styles.p_about} ${"p_section c-txt--center"}`}>
      <div className='p_section__head'>
        <h2 className='c-txt c-txt--center p_section__title'>About us<span className='c-txt__md'>私たちについて</span></h2>
      </div>
      <div className={`${styles.p_about__body} ${"p_section__body"}`}>
        <Image
          src='/images/home/left.webp'
          height={400}
          width={600}
          alt="常見大祐のイメージ1"
          className={styles.p_about__imgLeft}
        />
        <Image
          src='/images/home/right.webp'
          height={400}
          width={600}
          alt="常見大祐のイメージ2"
          className={styles.p_about__imgRight}
        />
        <div className={styles.p_about__text}>
          <h3 className='c-txt__lg c-txt--center'>ユーザーを、ビジネスを、<br className='off_sm'></br>ミツメルデザイン</h3>
          <p className='c-txt__md u-mt24'>
            はじめまして、ミツメルデザイン 常見大祐（つねみだいすけ）と申します！<br />
            ミツメルデザインでは、Web・デジタル、グラフィックのデザイン開発を通じて、あらゆるビジネスを阻む壁を取り除きます。<br />
            そのために、あらゆる角度からユーザーを見つめ、最高のサービス体験を提供しています。
          </p>
        </div>
      </div>
      {/* <div className='p_section__foot u-align center'>
        <Link className='c-btn__line' href="/about">詳しく見る</Link>
      </div> */}
    </section>
  )
}