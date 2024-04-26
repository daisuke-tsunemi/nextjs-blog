import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import View from '../components/view';
import Layout, { siteTitle } from './layouts/layout';
import Styles from '../styles/css/stylesHome.module.css'
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
      <section className={Styles.p_section}>
        <View />
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${Styles.p_section} ${Styles.padding1px}`}>
        <div className='l-container'>
          <div className={Styles.p_section__head}>
            <h2 className='c-ttl'>
              Works
              <span className='star'></span><span className='star'></span><span className='star'></span>
            </h2>
          </div>
          <div className={Styles.p_section__body}>
            <ul className={Styles.gridCard}>
              {allPostsData.map(({ id, date, title, image }) => (
                <li className={Styles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <Image
                      priority
                      className={Styles.img}
                      src={image}
                      height={200}
                      width={300}
                      alt=""
                    />
                    <h4 className={Styles.headingMd}>{title}</h4>
                    <small className={Styles.lightText}>
                      <Date dateString={date} />
                    </small>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/posts" className='c-btn'>All Works</Link>
          </div>
        </div>
      </section>
    </Layout>
  );  
}
