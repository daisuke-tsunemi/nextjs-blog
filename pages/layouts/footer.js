import Image from 'next/image';
import Link from 'next/link';
import layoutStyles from '../../styles/css/layout.module.css';

export default function Footer() {
  return (
    <footer className={layoutStyles.footer}>
      <div className="p-footer">
        <div className="p-footer__logo">
          <Image
            priority
            src="/images/logo/logo.png"
            width={150}
            height={50}
            alt="ロゴ"
          />
        </div>
        <div className="p-footer__menu">
          <nav className="p-footer__menu--nav">
            <Link className='c-txt__sm' href="/">Home</Link>
            <Link className='c-txt__sm' href="/posts">Blog Index</Link>
            <Link className='c-txt__sm' href="/details/first">Details First</Link>
          </nav>
        </div>
      </div>
      <p className="copyright">1234567890-0iugfcvb</p>
    </footer>
  )
}