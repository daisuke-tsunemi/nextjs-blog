import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import View from '../components/view';
import Layout, { siteTitle } from './layouts/layout';
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
      <section className='p_section'>
        <View />
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className='p_section'>
        <div className='p_section__head'>
          <h2 className='title'>
            Works
            <span className='star'></span><span className='star'></span><span className='star'></span>
          </h2>
          <Link href="/posts" className='c-btn'>All Posts</Link>
        </div>
        <div className='p_section__body'>
          <ul className='gridCard'>
            {allPostsData.map(({ id, date, title, image }) => (
              <li className='listItem' key={id}>
                <Link href={`/posts/${id}`}>
                  <Image
                    priority
                    className='img'
                    src={image}
                    height={200}
                    width={300}
                    alt=""
                  />
                  <figcaption>
                  <h4 className='headingMd'>{title}</h4>
                  <small className='lightText'>
                    <Date dateString={date} />
                  </small>
                  </figcaption>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );  
}
