import Layout from '../layouts/layout'
import Head from 'next/head';
import Image from 'next/image';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <link rel="canonical" href="" />
      </Head>
      <section className='p_works'>
        <div className='p_works__head'>
          <Image
            priority
            className='img'
            src={postData.image}
            height={500}
            width={400}
            alt="メインのイメージ"
          />
        </div>
        <div className='l-container'>
          <div className='p_works__body'>
            <h1 className='c-txt__xl c-txt__weight--700'>
              {postData.title}
            </h1>
            <Date dateString={postData.date} />
            <div className='u-align p_works__tag u-mt16'>
              <p className='c-txt__min c-txt__height--1 c-txt__letter--0'>{postData.tag_1}</p>
              <p className='c-txt__min c-txt__height--1 c-txt__letter--0'>{postData.tag_2}</p>
            </div>
          </div>
          <div className='p_works__foot'>
            <p>
            {postData.id}
            </p>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}