import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'Your Name';
export const siteTitle = 'エラーが起こっています';

export default function Layout({ children, home }) {
  return (
    <div className={'grid h-screen px-8 md:px-4'}>
      <Head>
        <link rel="icon" href="images/logo/favicon/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js"/>
        <meta property="og:image" content={'https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'}/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className='header'>
        <Image
          priority
          src="https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"
          className='logo'
          width={300}
          height={80}
          alt="Nextのロゴ"
        />
      </header>

      <main>{children}</main>
      {!home && (
        <div className='backToHome'>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}