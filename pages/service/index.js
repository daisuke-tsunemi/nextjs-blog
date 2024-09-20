import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Layout from '../layouts/layout';
import styles from "../../styles/pages/page.module.scss";
import Service from '../../components/page/service';

export default function Feature() {
  return (
    <Layout>
      <Head>
        <title>サービス概要 - Service</title>
        <meta property="og:title" content="サービス概要 - Service" key="title" />
      </Head>
      <div className={styles.heading}>
        <Image
          priority
          className={styles.heading__img}
          src='/images/pages/about.webp'
          height={160}
          width={300}
          alt="Aboutのイメージ"
        />
      </div>
      <section className={styles.p_page__content}>
        <div className='l-container__900'>
          <div className='p_section__head'>
            <h1 className={styles.heading__title}>Service<br className='off_sm' /><span className='c-txt__md'>サービス概要</span></h1>
          </div>
          <div className='p_section__body'>
            <div className='c-txt u-mb48'>
              <p className='c-txt__md c-txt--center'>
                はじめまして、ミツメルデザイン<br className='off_sm' /> 常見大祐（つねみだいすけ）と申します！<br />
                ミツメルデザインでは、Web・デジタル、グラフィックのデザイン開発を通じて、<br />あらゆるビジネスを阻む壁を取り除きます。<br />
                多角的にユーザーベネフィットを見つめ、<br className='off_sm' />最高のサービス体験を提供しています。
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