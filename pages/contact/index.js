import Head from 'next/head';
import Image from 'next/image';
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
          src='/images/pages/contact.webp'
          height={160}
          width={300}
          alt="Contactのイメージ"
        />
      </div>
      <section className={styles.p_page__content}>
        <div className={`${styles.l_contact} ${"l-container"}`}>
          <div className='p_section__head'>
            <h1 className={styles.heading__title}>Contact<span className='c-txt__md'>お問い合わせ</span></h1>
          </div>
          <div className='p_section__body'>
            <form className='l-form' method='post' target='hidden_iframe' onsubmit='submitted=true;'
            action='https://docs.google.com/forms/u/1/d/e/1FAIpQLSfVATRi2XO2aH_nxt_9UILpv22oIC78Iq7S1O0HDcI3ucDsdw/formResponse'>
              <div className='l-form__body'>
                <label className='f-item'>
                  <p className='f-label required'>メールアドレス<small className='c-unit__after'>※半角英数小文字で入力</small></p>
                  <div>
                    <input className='u-w100p' type='email' placeholder='sample@mail.com' maxlength='100' name='emailAddress' required />
                  </div>
                  <p className='c-txt__error'>メールアドレスは半角英数小文字正しく入力してください</p>
                </label>
                <label className='f-item'>
                  <p className='f-label required'>氏名</p>
                  <div className='u-align'>
                    <input className='u-w100p' type='text' placeholder='山田 太郎' maxlength='20' name='entry.731174060' required />
                  </div>
                  <p className='c-txt__error'>氏名は必ず正しく入力してください</p>
                </label>
                <label className='f-item'>
                  <p className='f-label optional'>会社名</p>
                  <div>
                    <input className='u-w100p' type='text' placeholder='株式会社サンプル' maxlength='100' name='entry.834472026' />
                  </div>
                </label>
                <label className='f-item'>
                  <p className='f-label optional'>電話番号<small className='c-unit__after'>※ハイフンなし、半角小数字で入力</small></p>
                  <div>
                    <input className='u-w300' type='text' inputmode='numeric' pattern='\d*' placeholder='09012345678' maxlength='13' name='entry.1709705454' />
                  </div>
                  <p className='c-txt__error'>電話番号はハイフンなし、半角小数字で正しく入力してください</p>
                </label>
                <div className='f-item'>
                  <p className='f-label required'>お問い合わせの種類</p>
                  <div className='u-align'>
                    <label className='c-checkbox'>
                      <input type='checkbox' name='entry.466861117' />ホームページの制作
                    </label>
                    <label className='c-checkbox'>
                      <input type='checkbox' name='entry.466861117' />LPの制作
                    </label>
                    <label className='c-checkbox'>
                      <input type='checkbox' name='entry.466861117' />ロゴの制作
                    </label>
                    <label className='c-checkbox'>
                      <input type='checkbox' name='entry.466861117' />名刺、ショップカードの制作
                    </label>
                    <label className='c-checkbox'>
                      <input type='checkbox' name='entry.466861117' />リーフレットの制作
                    </label>
                    <label className='c-checkbox'>
                      <input type='checkbox' name='entry.466861117' />管理画面の制作
                    </label>
                    <label className='c-checkbox'>
                      <input type='checkbox' name='entry.466861117' />その他
                    </label>
                  </div>
                  <p className='c-txt__error'>お問い合わせの種類はどれか一つは必ず選択してください</p>
                </div>
                <div className='f-item'>
                  <p className='f-label optional'>ご予算</p>
                  <div className='u-align'>
                    <label className='c-radio'>
                      <input type='radio' name='entry.420340127' />50,000円前後
                    </label>
                    <label className='c-radio'>
                      <input type='radio' name='entry.420340127' />100,000円前後
                    </label>
                    <label className='c-radio'>
                      <input type='radio' name='entry.420340127' />200,000円前後
                    </label>
                    <label className='c-radio'>
                      <input type='radio' name='entry.420340127' />300,000円前後
                    </label>
                    <label className='c-radio'>
                      <input type='radio' name='entry.420340127' />500,000円以上
                    </label>
                  </div>
                </div>
                <label className='f-item'>
                  <p className='f-label required'>タイトル<small className='c-unit__after'>※200文字以内で入力</small></p>
                  <div>
                    <input className='u-w100p' type='text' placeholder='お問い合わせタイトル' maxlength='200' name='entry.1350789339' required />
                  </div>
                  <p className='c-txt__error'>タイトルは200文字以内で正しく入力してください</p>
                </label>
                <label className='f-item'>
                  <p className='f-label required'>お問い合わせ内容<small className='c-unit__after'>※1000文字以内で入力</small></p>
                  <div>
                    <textarea cols='30' rows='10' placeholder='お問い合わせ内容を入力してください' name='entry.1820498006' required maxlength='1000'></textarea>
                  </div>
                  <p className='c-txt__error'>お問い合わせ内容は1000文字以内で必ず入力してください</p>
                </label>
              </div>
              <div className='l-form__foot u-align center'>
                <p>このフォームにはGoogle Formを使用しています。</p>
                <button type='submit' className='c-btn lg' value="Submit">送信する</button>
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