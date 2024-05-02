import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import View from '../components/view';
import About from '../components/home/about';
import Service from '../components/home/service';
import Flow from '../components/home/flow';
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
      <section className='p_fv'>
        <div className='l-container'>
          <View />
          <div className='logo'>
            <Image
              priority
              src="/images/logo/logo_set.png"
              height={80}
              width={120}
              alt=""
            />
          </div>
        </div>
      </section>
      <About />
      <Service />
      <Flow />
      {/* Add this <section> tag below the existing <section> tag */}
      <section className='p_section'>
        <div className='l-container__1200'>
          <div className='p_section__head'>
            <h2 className='c-txt__lg'>
              Works
              <span className='star'></span><span className='star'></span><span className='star'></span>
            </h2>
          </div>
          <div className='p_section__body'>
            <div className='l-grid--3 gridCard'>
              {allPostsData.map(({ id, date, title, thumbnail }) => (
                <Link className='listItem' key={id} href={`/posts/${id}`}>
                  <Image
                    priority
                    className='img'
                    src={thumbnail}
                    height={300}
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
              ))}
            </div>
          </div>
          <div className='p_section__foot'>
            <Link href="/posts" className='c-btn'>All Posts</Link>
          </div>
        </div>
      </section>
    </Layout>
  );  
}
