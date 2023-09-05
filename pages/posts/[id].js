import Layout from '../layouts/layout'
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date';
import styles from '../../public/css/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={styles.headingXl}>
        {postData.title}
      </h1>
      <br />
      <p>
      {postData.id}
      </p>
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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