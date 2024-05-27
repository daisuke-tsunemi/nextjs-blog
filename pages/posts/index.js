import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../layouts/layout';
import { getSortedPostsData } from '../../lib/posts';
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
export default function Posts ({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{`Blog Index | ${siteTitle}`}</title>
      </Head>
        <div className={styles.page__header}>
        <Image
          priority
          className='page__header--img'
          src='/images/bg/bg_spat.webp'
          height={200}
          width={300}
          alt="アートのイメージ"
        />
      </div>
      <section className='p_section'>
        <div className='p_section__head'>
        </div>
        <div className='l-container'>
          <div className='p_section__body'>
            <h1 className='p_section__title'>Works Index<span className='c-txt__md'>制作実績一覧</span></h1>
          </div>
          <div className='p_section__foot'>
            <div className='l-grid--3 gap16'>
              {allPostsData.map(({ id, date, title, thumbnail }) => (
                <Link className='listItem' key={id} href={`/posts/${id}`}>
                    <h3 className='headingMd'>{title}</h3>
                    <Image
                      priority
                      className='img'
                      src={thumbnail}
                      height={300}
                      width={300}
                      alt=""
                    />
                  <small className='lightText'>
                    <Date dateString={date} />
                  </small>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
