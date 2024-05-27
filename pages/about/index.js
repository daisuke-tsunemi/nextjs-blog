import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Layout from '../layouts/layout';
import styles from "../../styles/pages/page.module.scss";

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
            <h1 className={styles.heading__title}>About Us <small>私たちについて</small></h1>
      
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