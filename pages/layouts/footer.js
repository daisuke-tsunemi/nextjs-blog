import Image from 'next/image';
import Link from 'next/link';
import Navi from '../layouts/navi';

export default function Footer() {
  return (
    <footer className='l-footer'>
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
          <Navi />
        </div>
      </div>
      <p className="copyright">1234567890-0iugfcvb</p>
    </footer>
  )
}