import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import View from '../components/view';
import Layout, { siteTitle } from './layouts/layout';
import home from '../styles/css/stylesHome.module.css'
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
      <section className={home.p_section}>
        <View />
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${home.p_section} ${home.padding1px}`}>
        <div className={home.p_section__head}>
          <h2 className='title'>
            Works
            <span className='star'></span><span className='star'></span><span className='star'></span>
          </h2>
          <Link href="/posts">Posts</Link>
        </div>
        <div className={home.p_section__body}>
          <ul className={home.gridCard}>
            {allPostsData.map(({ id, date, title, image }) => (
              <li className={home.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <Image
                    priority
                    className={home.img}
                    src={image}
                    height={200}
                    width={300}
                    alt=""
                  />
                  <h4 className={home.headingMd}>{title}</h4>
                  <small className={home.lightText}>
                    <Date dateString={date} />
                  </small>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );  
}
