import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../layouts/footer';
import View from '../components/view';
import layoutStyles from '../../public/css/layout.module.css';
import styles from '../../public/css/utils.module.css'

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';
export const siteDescription = 'Learn how to build a personal website using Next.js';

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyles.page}>
      <Head>
        <link rel="icon" href="images/logo/favicon/favicon.ico" />
        <meta name="description" content={siteDescription}/>
        <meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      
      <header className={layoutStyles.header}>
        {home ? (
          <>
            <h1 className={styles.heading2Xl}>{name}</h1>
            <View />
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/img_9.png"
                className={styles.borderCircle}
                height={60}
                width={60}
                alt=""
              />
            </Link>
            <h2 className={styles.headingLg}>
              <Link href="/" className={styles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <main className={layoutStyles.main}>{children}</main>
      <Footer />

    </div>
  );
}