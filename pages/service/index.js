import Head from 'next/head';
import Link from 'next/link';
import Flow from '../../components/page/flow';
import Service from '../components/page/service';
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
      <div className={styles.heading}>
        <Image
          priority
          className={styles.heading__img}
          src="/public/images/bg/bg_fv.webp"
          height={300}
          width={400}
          alt="メインのイメージ"
        />
      </div>
      <section className='p_section'>
        <div className='l-container'>
          <div className='p_section__head'>
            <h1 className={styles.heading__title}>Service <span className='c-txt__md'>サービスについて</span></h1>
          </div>
          <div className='p_section__body'>
            <Service />
          </div>
          <div className='p_section__body'>
            <Flow />
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