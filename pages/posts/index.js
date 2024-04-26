import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../layouts/layout';
import Styles from '../../styles/css/stylesPage.module.css'
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
      <section className={`${Styles.headingMd} ${Styles.padding1px}`}>
        <div className="l-container">
          <h1 className='c-ttl'>Blog Index 
            <span className='star'></span><span className='star'></span><span className='star'></span>
          </h1>
          <div className={Styles.gridCard}>
            {allPostsData.map(({ id, date, title, image }) => (
              <article className={Styles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <figure className='u-m0'>
                    <Image
                      priority
                      className={Styles.img}
                      src={image}
                      height={300}
                      width={400}
                      alt=""
                    />
                    <figcaption>
                      <h3 className={Styles.headingMd}>{title}
                        <small className={Styles.lightText}>
                          <Date dateString={date} />
                        </small>
                      </h3>
                    </figcaption>
                  </figure>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
