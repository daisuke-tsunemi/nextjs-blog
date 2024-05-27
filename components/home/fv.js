import Image from 'next/image';
import styles from "../../styles/pages/home.module.scss";
export default function Fv() {
  return (
    <section className={styles.p_fv}>
      <div className={styles.p_fv__container}>
        <div className={styles.p_fv__body}>
          <Image
            priority
            src="/images/logo/logo_set.png"
            height={80}
            width={120}
            alt="Mitsumeru ロゴ"
            className={styles.p_fv__logo}
          />
          <h2 className="p_fv__head--title c-txt__xl2 c-txt--center">
              <strong>事業</strong>を<span>見つめる</span><br className='off_md' /><strong>デザイン</strong>を
          </h2>
          <h3 className="c-txt__md u-align--center">
              
          </h3>
        </div>
      </div>
    </section>
  )
}