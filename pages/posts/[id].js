import Layout from '../layouts/layout'
import Head from 'next/head';
import Image from 'next/image';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date';
import styles from '../../styles/css/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={styles.content}>
        <h1 className={styles.headingXl}>
          {postData.title}
        </h1>
        <Image
          priority
          className={styles.img}
          src={postData.image}
          height={100}
          width={200}
          alt=""
        />
        <br />
        <p>
        {postData.id}
        </p>
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
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