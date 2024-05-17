import Image from 'next/image';
import Navi from '../layouts/navi';

export default function Footer() {
  return (
    <footer className='l-footer'>
      <div className="p-footer">
        <div className="p-footer__body">
          <div className="p-footer__logo">
            <Image
              priority
              src="/images/logo/logo_set.png"
              width={150}
              height={50}
              alt="ロゴ"
            />
          </div>
          <div className="p-footer__menu">
            <Navi />
          </div>
        </div>
        <div className="p-footer__foot">
          <p className="copyright">© Mitsumeru Design Studio All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}