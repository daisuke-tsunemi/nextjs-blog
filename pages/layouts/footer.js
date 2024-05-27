import Image from 'next/image';
import Navi from '../layouts/navi';
import styles from "../../styles/layouts/footer.module.scss";

export default function Footer() {
  return (
    <footer className='l-footer'>
      <div className={styles.p_footer}>
        <div className={styles.p_footer__body}>
          <div className={styles.p_footer__logo}>
            <Image
              priority
              src="/images/logo/logo_set.png"
              width={150}
              height={50}
              alt="ロゴ"
            />
          </div>
          <div className={styles.p_footer__menu}>
            <Navi />
          </div>
        </div>
        <div className={styles.p_footer__foot}>
          <p className="copyright">© Mitsumeru Design Studio All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}