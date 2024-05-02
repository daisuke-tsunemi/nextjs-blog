import Layout from '../layouts/layout'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
        <div className='page__header'>
          <Image
            priority
            className='page__header--img'
            src={postData.thumbnail}
            height={400}
            width={400}
            alt="{postData.title}のイメージ"
          />
        </div>
        <div className='l-container'>
          <div className='p_works__body'>
            <h1 className='c-txt__lg c-txt__weight--700'>
              {postData.title}
            </h1>
            <Date dateString={postData.date} />
            <div className='u-align p_works__tag u-mt16'>
              <p className='c-txt__min c-txt__height--1 c-txt__letter--0'>{postData.tag_1}</p>
              <p className='c-txt__min c-txt__height--1 c-txt__letter--0'>{postData.tag_2}</p>
            </div>
            <div className='u-mt32' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div className='u-align center u-mt32'>
              <Link href="/posts" className='c-btn__line'>Works一覧へ</Link>
            </div>
          </div>
          <div className='p_works__foot'>
            <Image
              priority
              className='img--4_3'
              src={postData.image1}
              height={500}
              width={400}
              alt="{postData.title}のイメージ1"
            />
            <Image
              priority
              className='img--4_3'
              src={postData.image2}
              height={500}
              width={400}
              alt="{postData.title}のイメージ2"
            />
            <Image
              priority
              className='img--4_3'
              src={postData.image3}
              height={500}
              width={400}
              alt="{postData.title}のイメージ3"
            />
            <Image
              priority
              className='img--4_3'
              src={postData.image3}
              height={500}
              width={400}
              alt="{postData.title}のイメージ4"
            />
            <Image
              priority
              className='img--4_3'
              src={postData.image4}
              height={500}
              width={400}
              alt="{postData.title}のイメージ5"
            />
            <Image
              priority
              className='img--4_3'
              src={postData.image5}
              height={500}
              width={400}
              alt="{postData.title}のイメージ6"
            />
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