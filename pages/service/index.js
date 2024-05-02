import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../layouts/layout';

export default function Service() {
  return (
    <Layout>
      <Head>
        <title>Service</title>
        <meta property="og:title" content="Service - サービスのご紹介" key="title" />
      </Head>
      
      <h1 className={'text-3xl font-black'}>最初の Post</h1>
      <h2>
        <Link href="/" className='c-btn--white'>Back to home</Link>
      </h2>
      
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