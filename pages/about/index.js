import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Layout from '../layouts/layout';
import styles from "../../styles/pages/page.module.scss";
import Service from '../../components/page/service';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta property="og:title" content="私たちについて - About Us" key="title" />
      </Head>
      <div className={styles.heading}>
        <Image
          priority
          className={styles.heading__img}
          src='/images/pages/about.jpg'
          height={300}
          width={400}
          alt="メインのイメージ"
        />
      </div>
      <section className={styles.p_page__content}>
        <div className='l-container'>
          <div className='p_section__head'>
            <h1 className={styles.heading__title}>About Us<span className='c-txt__md'>私たちについて</span></h1>
          </div>
          <div className='p_section__body'>
            <div className='c-txt u-mb32'>
              <h3 className='c-txt__lg c-txt--center'>ユーザーを、ビジネスを、<br className='off_sm'></br>ミツメルデザイン</h3>
              <p className='c-txt__md u-mt24 c-txt--center'>
                はじめまして、ミツメルデザイン 常見大祐（つねみだいすけ）と申します！<br />
                ミツメルデザインでは、Web・デジタル、グラフィックのデザイン開発を通じて、あらゆるビジネスを阻む壁を取り除きます。<br />
                そのために、あらゆる角度からユーザーを見つめ、最高のサービス体験を提供しています。
              </p>
            </div>
            <Service />
          </div>
        </div>
      </section>
      
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    </Layout>
  );
}