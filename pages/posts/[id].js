import Layout from '../layouts/layout'
import Head from 'next/head';
import Image from 'next/image';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date';
import stylesPage from '../../styles/css/stylesPage.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className={stylesPage.p_section}>
        <div className={stylesPage.p_section__head}>
          <h1 className='title'>
            {postData.title}
          </h1>
        </div>
        <div className={stylesPage.p_section__body}>
          <Image
            priority
            className={stylesPage.img}
            src={postData.image}
            height={300}
            width={400}
            alt="メインのイメージ"
          />
        </div>
      </section>
      <section className={stylesPage.p_section}>
        <div className={stylesPage.p_section__head}>
          <p>
          {postData.id}
          </p>
        </div>
        <div className={stylesPage.p_section__body}>
          <Date dateString={postData.date} />
        </div>
        <div className={stylesPage.p_section__Foot}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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