import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../layouts/layout';
import { getSortedPostsData } from '../../lib/works';
import Date from '../../components/date';
import styles from "../../styles/pages/page.module.scss";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Works ({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{`Woeks Index | ${siteTitle}`}</title>
      </Head>
      <div className={styles.heading}>
        <Image
          priority
          className={styles.heading__img}
          src='/images/pages/works.webp'
          height={160}
          width={300}
          alt="Worksのイメージ"
        />
      </div>
      <section className={styles.p_page__content}>
        <div className='l-container'>
          <div className='p_section__head'>
            <h1 className={styles.heading__title}>Works Index<br className='off_sm' /><span className='c-txt__md'>制作実績一覧</span></h1>
          </div>
          <div className='p_section__body'>
            <div className={`${styles.p_works__gridCard} ${"u-gap24"}`}>
              {allPostsData.map(({ id, date, title, thumbnail }) => (
              <Link className={styles.p_works__listItem} key={id} href={`/works/${id}`}>
                <picture>
                  <Image
                    priority
                    className={styles.p_works__listImg}
                    src={thumbnail}
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
        </div>
      </section>
    </Layout>
  );
}
