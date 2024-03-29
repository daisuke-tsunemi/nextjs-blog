import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../layouts/footer';
import Sidebar from '../layouts/aside';
import layoutStyles from '../../styles/css/layout.module.css';
import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';

const description = 'Your NameYour NameYour NameYour NameYour Name';
export const siteTitle = 'Next.js Sample Website';
export const pageTitle = 'トップページ';
export const siteDescription = 'Learn how to build a personal website using Next.js';

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyles.page}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <link rel="icon" href="images/logo/favicon/favicon.ico" />
        <meta property="og:site_name" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ユーザー名" />
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
        <meta property="og:url" content="https://" />
        <meta property="og:type" content="website" />
        <meta name="description" content={siteDescription}/>
        <meta property="og:description" content={siteDescription} />
        <meta name="og:title" content={pageTitle} />
        <title>{pageTitle} | {siteTitle}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Alata&family=Galada&family=Kiwi+Maru:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      {/* ヘッダー */}
      <header className={layoutStyles.header}>
        <>
          <div className='container'>
            <h2 className='c-text__min'>
              {description}
            </h2>
            <div className='logo'>
              <Link href="/">
                <Image
                  priority
                  src="/images/logo/logo.png"
                  height={48}
                  width={48}
                  alt=""
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <ForwardToInboxTwoToneIcon color="secondary" />
              </Link>
            </div>
          </div>
        </>
      </header>

      {/* サイドナビ */}
      <Sidebar />

      {/* メインコンテンツ */}
        {
          home ? (
            <main className={layoutStyles.mainHome}>
              {children}
            </main>
          ) : (
            <main className={layoutStyles.mainPage}>
              {children}
            </main>
          )
        }

      {/* フッター */}
      <Footer />
    </div>
  );
}