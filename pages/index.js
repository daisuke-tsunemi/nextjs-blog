import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from './layouts/layout';
import { getSortedPostsData } from '../lib/works';
import Date from '../components/date';
import styles from "../styles/pages/home.module.scss";
import dynamic from 'next/dynamic';
const FView = dynamic(() => import('../components/home/pView'), { ssr: false });

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{`Top page | ${siteTitle}`}</title>
        <meta name="description" content="top page desu"/>
      </Head>
      <section className={styles.p_fv}>
        <div className={styles.p_fv__container}>
          <div className={styles.p_fv__head}>
            <FView />
          </div>
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
            <div className="c-txt__md u-align--center">
              <Link href='#about'>Scroll</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className={`${styles.p_about} ${"p_section c-txt--center"}`} id='about'>
        <div className='p_section__head'>
          <h2 className='c-txt c-txt--center p_section__title'>About us<span className='c-txt__md'>私たちについて</span></h2>
        </div>
        <div className={`${styles.p_about__body} ${"p_section__body"}`}>
          <Image
            src='/images/home/left.webp'
            height={400}
            width={600}
            alt="常見大祐のイメージ1"
            className={styles.p_about__imgLeft}
          />
          <Image
            src='/images/home/right.webp'
            height={400}
            width={600}
            alt="常見大祐のイメージ2"
            className={styles.p_about__imgRight}
          />
          <div className={styles.p_about__text}>
            <h3 className='c-txt__lg c-txt--center'>ユーザーを、ビジネスを、<br className='off_sm'></br>ミツメルデザイン</h3>
            <p className='c-txt__md u-mt24'>
              はじめまして、ミツメルデザイン 常見大祐（つねみだいすけ）と申します！<br />
              ミツメルデザインでは、Web・デジタル、グラフィックのデザイン開発を通じて、あらゆるビジネスを阻む壁を取り除きます。<br />
              多角的にユーザーベネフィットを見つめ、最高のサービス体験を提供しています。
            </p>
          </div>
        </div>
        <div className='p_section__foot u-align center'>
          <Link className='c-btn__line' href="/about">詳しく見る</Link>
        </div>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${styles.p_works} ${"p_section"}`}>
        <div className='p_section__head'>
          <h2 className='c-txt p_section__title'>Works<span className='c-txt__sm'>制作実績</span></h2>
        </div>
        <div className='l-container__1200'>
          <div className='p_section__body'>
            <div className={`${styles.p_works__gridCard} ${"l-grid--3 u-gap24"}`}>
              {allPostsData.map(({ id, date, title, image1 }) => (
                <Link className={styles.p_works__listItem} key={id} href={`/works/${id}`}>
                  <picture className={'name'}>
                    <Image
                      priority
                      className='img'
                      src={image1}
                      height={300}
                      width={300}
                      alt="サムネイル"
                    />
                  </picture>
                  <figcaption>
                    <h4 className='headingMd'>{title}</h4>
                    <small className='lightText'>
                      <Date dateString={date} />
                    </small>
                  </figcaption>
                </Link>
              ))}
            </div>
          </div>
          <div className='p_section__foot u-align center'>
            <Link href="/works" className='c-btn'>All Posts</Link>
          </div>
        </div>
      </section>
    </Layout>
  );  
}
