import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../layouts/layout';
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
      <section className='headingMd'>
        <div className='l-container'>
          <h1 className='title'>Blog Index 
            <span className='star'></span><span className='star'></span><span className='star'></span>
          </h1>
          <div className='l-grid--3 gap16'>
            {allPostsData.map(({ id, date, title, image }) => (
              <Link className='listItem' key={id} href={`/posts/${id}`}>
                  <h3 className='headingMd'>{title}</h3>
                  <Image
                    priority
                    className='img'
                    src={image}
                    height={300}
                    width={400}
                    alt=""
                  />
                <small className='lightText'>
                  <Date dateString={date} />
                </small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
