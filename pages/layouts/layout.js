import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import Loading from './loading';
import { Suspense } from "react";

export const siteTitle = 'Mitsumeru Design Studio';
export const pageTitle = 'デザインページ';
export const siteDescription = 'ユーザーを、ビジネスを、ミツメルデザイン';

export default function Layout({ children, home }) {
  return (
    <div className='l-wrap'>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="img/png" sizes="32x32" href="images/favicon/favicon.ico" />
        <link rel="icon" type="img/png" sizes="16x16" href="images/favicon/favicon.ico" />
        <meta name="author" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dt___" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
        <meta property="og:url" content="https://mitsumeru-design.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={siteDescription} />
        <title>{pageTitle} | {siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Galada&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap" />
      </Head>
      {/* ヘッダー */}
      <Header />
      {/* メインコンテンツ */}
        {
          home ? (
            <Suspense fallback={<Loading />}>
              <main className='mainHome'>
                {children}
              </main>
            </Suspense>
          ) : (
            <Suspense fallback={<Loading />}>
              <main className='mainPage'>
                {children}
              </main>
            </Suspense>
          )
        }
      {/* フッター */}
      <Footer />
    </div>
  );
}