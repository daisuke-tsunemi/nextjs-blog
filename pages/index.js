import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import Fv from '../components/home/fv';
import About from '../components/home/about';
import Layout, { siteTitle } from './layouts/layout';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import styles from "../styles/pages/home.module.scss";

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
      <Fv />
      <About />
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${styles.p_works} ${"p_section"}`}>
        <div className='p_section__head'>
          <h2 className='c-txt p_section__title'>Works<span className='c-txt__sm'>制作実績</span></h2>
        </div>
        <div className='l-container__1200'>
          <div className='p_section__body'>
            <div className={`${styles.p_works__gridCard} ${"l-grid--3 u-gap24"}`}>
              {allPostsData.map(({ id, date, title, thumbnail }) => (
                <Link className={styles.p_works__listItem} key={id} href={`/works/${id}`}>
                  <Image
                    priority
                    className='img'
                    src={thumbnail}
                    height={300}
                    width={300}
                    alt="サムネイル"
                  />
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
