import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from './layouts/layout';
import styles from '../public/css/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

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
      <section className={styles.headingMd}>
        <h4>[Your Self Introduction]</h4>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <Link href="/posts">Posts</Link>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingXl}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );  
}
