import Image from 'next/image';
import styles from "../../styles/pages/home.module.scss";
export default function Flow() {
  return (
    <section className={`${styles.p_flow} ${"p_section c-txt--right"}`}>
      <div className={`${styles.p_flow__head} ${"p_section__head"}`}>
        <h2 className='c-txt c-txt--right p_section__title'>Customer Flow<span className='c-txt__md'>ご利用の流れ</span></h2>
      </div>
      <div className='l-container__1200'>
        <div className='p_section__body'>
          <div className='l-grid--4 u-gap24'>

            <div className={`${styles.p_flowItem} ${"l-grid--item"}`}>
              <div className='l-grid--item__head'>
                <Image src='/images/content/service_icon_1.png' className={styles.image__square} height={100} width={100} alt="ご利用のイメージ1" />
              </div>
              <div className={styles.p_flowItem__body}>
                <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                <p className='c-txt__sm'>
                  ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                </p>
              </div>
            </div>
            <div className={`${styles.p_flowItem} ${"l-grid--item"}`}>
              <div className='l-grid--item__head'>
                <Image src='/images/content/service_icon_2.png' className={styles.image__square} height={100} width={100} alt="ご利用のイメージ1" />
              </div>
              <div className={styles.p_flowItem__body}>
                <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                <p className='c-txt__sm'>
                  ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                </p>
              </div>
            </div>
            <div className={`${styles.p_flowItem} ${"l-grid--item"}`}>
              <div className='l-grid--item__head'>
                <Image src='/images/content/service_icon_3.png' className={styles.image__square} height={100} width={100} alt="ご利用のイメージ1" />
              </div>
              <div className={styles.p_flowItem__body}>
                <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                <p className='c-txt__sm'>
                  ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                </p>
              </div>
            </div>
            <div className={`${styles.p_flowItem} ${"l-grid--item"}`}>
              <div className='l-grid--item__head'>
                <Image src='/images/content/service_icon_4.png' className={styles.image__square} height={100} width={100} alt="ご利用のイメージ1" />
              </div>
              <div className={styles.p_flowItem__body}>
                <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                <p className='c-txt__sm'>
                  ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                </p>
              </div>
            </div>
            <div className={`${styles.p_flowItem} ${"l-grid--item"}`}>
              <div className='l-grid--item__head'>
                <Image src='/images/content/service_icon_5.png' className={styles.image__square} height={100} width={100} alt="ご利用のイメージ1" />
              </div>
              <div className={styles.p_flowItem__body}>
                <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                <p className='c-txt__sm'>
                  ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                </p>
              </div>
            </div>
            <div className={`${styles.p_flowItem} ${"l-grid--item"}`}>
              <div className='l-grid--item__head'>
                <Image src='/images/content/service_icon_6.png' className={styles.image__square} height={100} width={100} alt="ご利用のイメージ1" />
              </div>
              <div className={styles.p_flowItem__body}>
                <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                <p className='c-txt__sm'>
                  ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                </p>
              </div>
            </div>
            <div className={`${styles.p_flowItem} ${"l-grid--item"}`}>
              <div className='l-grid--item__head'>
                <Image src='/images/content/service_icon_7.png' className={styles.image__square} height={100} width={100} alt="ご利用のイメージ1" />
              </div>
              <div className={styles.p_flowItem__body}>
                <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                <p className='c-txt__sm'>
                  ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                </p>
              </div>
            </div>
            <div className={`${styles.p_flowItem} ${"l-grid--item"}`}>
              <div className='l-grid--item__head'>
                <Image src='/images/content/service_icon_8.png' className={styles.image__square} height={100} width={100} alt="ご利用のイメージ1" />
              </div>
              <div className={styles.p_flowItem__body}>
                <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                <p className='c-txt__sm'>
                  ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}