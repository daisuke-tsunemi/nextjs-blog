import Head from 'next/head';
import Link from 'next/link';
import Flow from '../../components/page/flow';
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
          src='/images/pages/about.jpg'
          height={300}
          width={400}
          alt="メインのイメージ"
        />
      </div>
            <h1 className={styles.heading__title}>Service <small>サービスについて</small></h1>
      
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <section className='p_section'>
      <Flow />
      </section>
    </Layout>
  );
}