import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../layouts/layout';
import styles from '../../styles/css/utils.module.css'
import { getSortedPostsData } from '../../lib/posts';
import Date from '../../components/date';

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
          {allPostsData.map(({ id, date, title, image }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                  <h3 className={styles.headingMd}>{title}</h3>
                  <Image
                    priority
                    className={styles.img}
                    src={image}
                    height={100}
                    width={200}
                    alt=""
                  />
                <small className={styles.lightText}>
                  <Date dateString={date} />
                </small>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
