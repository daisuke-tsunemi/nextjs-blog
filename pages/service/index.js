import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../layouts/layout';
import Script from 'next/script';
import styles from "../../styles/pages/page.module.scss";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Service</title>
        <meta property="og:title" content="サービスのご紹介 - Service" key="title" />
      </Head>
      <div className={styles.page__header}>
        <Image
          priority
          className='img'
          src='/images/pages/service.jpg'
          height={300}
          width={400}
          alt="メインのイメージ"
        />
        <h1 className={styles.header__title}>サービスのご紹介</h1>
      </div>
      <div className='l-container'>
          <div className={'p_section__head'}>
          </div>
      </div>
      
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <section className='p_section'>
      </section>
    </Layout>
  );
}