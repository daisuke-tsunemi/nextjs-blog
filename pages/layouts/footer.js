import Image from 'next/image';
import Link from 'next/link';
import layoutStyles from '../../styles/css/layout.module.css';

export default function Footer() {
  return (
    <footer className={layoutStyles.footer}>
      <div className="l-grid--2 gap16">
        <div className="footer__logo">
          <Image
            priority
            src="https://og-image.vercel.app/nextjs-black-logo.svg"
            width={200}
            height={80}
            alt="Nextのロゴ"
          />
        </div>
        <div className="footer__menu">
          <nav className="footer__menu--nav">
            <Link href="/">Home</Link>
            <Link href="/posts">Blog Index</Link>
            <Link href="/details/first">Details First</Link>
          </nav>
        </div>
      </div>
      <p className="copyright">1234567890-0iugfcvb</p>
    </footer>
  )
}