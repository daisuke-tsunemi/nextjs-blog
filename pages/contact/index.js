import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Layout from '../layouts/layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="お問い合わせ - Contact" key="title" />
      </Head>
        <div className='page__header'>
          <Image
            priority
            className='img'
            src='/images/pages/about.jpg'
            height={300}
            width={400}
            alt="メインのイメージ"
          />
          <h1 className={'c-txt__xl page__header--title'}>お問い合わせ</h1>
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