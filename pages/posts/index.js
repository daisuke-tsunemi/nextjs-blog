import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../layouts/layout';
import styles from '../../public/css/utils.module.css'
import { getSortedPostsData } from '../../lib/posts';
import Date from '../../pages/components/date';

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

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingXl}>Blog Index</h2>
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
