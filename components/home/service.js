import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/pages/home.module.scss";
export default function Service() {
  return (
    <section className={`${styles.p_service} ${"p_section"}`}>
      <div className='p_section__head'>
        <h2 className='c-txt p_section__title'>Service<span className='c-txt__md'>サービス紹介</span></h2>
      </div>
      <div className='l-container__1200'>
        <div className='p_section__body'>
          <div className='l-grid--2 u-gap24'>
            <div className={styles.p_serviceItem}>
                <div className='c-image'>
                  <Image src='/images/content/service_icon_1.png' className={styles.image__square} height={80} width={80} alt="ご利用のイメージ1" />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>ホームページ制作</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
            </div>
            <div className={styles.p_serviceItem}>
                <div className='c-image'>
                  <Image src='/images/content/service_icon_2.png' className={styles.image__square} height={80} width={80} alt="ご利用のイメージ2" />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>CMSデザイン制作</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
            </div>
            <div className={styles.p_serviceItem}>
                <div className='c-image'>
                  <Image src='/images/content/service_icon_3.png' className={styles.image__square} height={80} width={80} alt="ご利用のイメージ3" />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>ロゴデザイン制作</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
            </div>
            <div className={styles.p_serviceItem}>
                <div className='c-image'>
                  <Image src='/images/content/service_icon_4.png' className={styles.image__square} height={80} width={80} alt="ご利用のイメージ4" />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>ブランディングツール制作</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
            </div>
            <div className={styles.p_serviceItem}>
                <div className='c-image'>
                  <Image src='/images/content/service_icon_5.png' className={styles.image__square} height={80} width={80} alt="ご利用のイメージ5" />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>LP制作</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
            </div>
            <div className={styles.p_serviceItem}>
                <div className='c-image'>
                  <Image src='/images/content/service_icon_6.png' className={styles.image__square} height={80} width={80} alt="ご利用のイメージ6" />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>SNSデザイン画像制作</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
            </div>
            <div className={styles.p_serviceItem}>
                <div className='c-image'>
                  <Image src='/images/content/service_icon_7.png' className={styles.image__square} height={80} width={80} alt="ご利用のイメージ7" />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>バナーデザイン制作</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
            </div>
            <div className={styles.p_serviceItem}>
              <div className='c-image'>
                <Image src='/images/content/service_icon_8.png' className={styles.image__square} height={80} width={80} alt="ご利用のイメージ8" />
              </div>
              <div className='c-txt'>
                <h3 className='c-txt__md c-txt__weight--700'>広告グラフィック制作</h3>
                <p className='c-txt__sm u-mt8'>
                  ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='p_section__foot u-align center'>
          <Link className='c-btn--white lg' href="/service">詳しく見る</Link>
        </div>
      </div>
    </section>
  )
}