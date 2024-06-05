import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../layouts/layout';
import styles from "../../styles/pages/page.module.scss";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta property="og:title" content="お問い合わせ - Contact" key="title" />
      </Head>
      <div className={styles.heading}>
        <Image
          priority
          className={styles.heading__img}
          src='/images/bg/bg_spat.webp'
          height={160}
          width={300}
          alt="アートのイメージ"
        />
      </div>
      <section className='p_section'>
        <div className={`${styles.l_contact} ${"l-container"}`}>
          <div className='p_section__head'>
            <h1 className={styles.heading__title}>Contact<span className='c-txt__md'>お問い合わせ</span></h1>
          </div>
          <div className='p_section__body'>
            <form className='l-form'>
              <div className='l-form__body'>
                <label className='f-item'>
                  <p className='f-label required'>氏名</p>
                  <div className='u-align'>
                    <input className='u-w200' type='text' placeholder='姓）山田' maxlength='20' />
                    <input className='u-w200' type='text' placeholder='名）太郎' maxlength='20' />
                  </div>
                </label>
                <label className='f-item'>
                  <p className='f-label optional'>会社名</p>
                  <input className='u-w100p' type='text' placeholder='株式会社サンプル' maxlength='100' />
                </label>
                <label className='f-item'>
                  <p className='f-label required'>メールアドレス<small className='c-unit__after'>※半角英数小文字で入力</small></p>
                  <input className='u-w100p' type='email' placeholder='sample@mail.com' maxlength='100' />
                </label>
                <label className='f-item'>
                  <p className='f-label optional'>電話番号<small className='c-unit__after'>※ハイフンあり、半角小数字で入力</small></p>
                  <input className='u-w300' type='text' inputmode='numeric' pattern='\d*' placeholder='090-1234-5678' maxlength='13' />
                </label>
                <label className='f-item'>
                  <p className='f-label required'>お問い合わせの種類</p>
                  <select>
                    <option selected disabled>選択してください</option>
                    <option>ホームページの制作</option>
                    <option>LPの制作</option>
                    <option>ロゴの制作</option>
                    <option>管理画面の制作</option>
                    <option>名刺、ショップカードの制作</option>
                    <option>リーフレットの制作</option>
                    <option>その他</option>
                  </select>
                </label>
                <label className='f-item'>
                  <p className='f-label optional'>ご予算</p>
                  <select>
                    <option selected disabled>選択してください</option>
                    <option>50,000円前後</option>
                    <option>100,000円前後</option>
                    <option>200,000円前後</option>
                    <option>500,000円前後</option>
                    <option>1,000,000円前後</option>
                    <option>2,000,000円以上</option>
                  </select>
                </label>
                <label className='f-item'>
                  <p className='f-label required'>タイトル<small className='c-unit__after'>※200文字以内で入力</small></p>
                  <input className='u-w100p' type='text' placeholder='お問い合わせタイトル' maxlength='200' />
                </label>
                <label className='f-item'>
                  <p className='f-label required'>お問い合わせ内容<small className='c-unit__after'>※1000文字以内で入力</small></p>
                  <textarea cols='30' rows='10' placeholder='お問い合わせ内容を入力してください'></textarea>
                </label>
              </div>
              <div className='l-form__foot u-align center'>
                <Link href="/" className='c-btn lg'>送信する</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
    </Layout>
  );
}