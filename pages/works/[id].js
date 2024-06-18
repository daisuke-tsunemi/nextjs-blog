import Layout from '../layouts/layout'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/works'
import Date from '../../components/date';
import Grid from '@mui/material/Grid';
import styles from "../../styles/pages/works.module.scss";

export default function Works({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <link rel="canonical" href="" />
      </Head>
      <div className={styles.heading}>
        <Image 
          priority className={styles.heading__img} src={postData.thumbnail} height={300} width={400} alt="{postData.title}のイメージ1"
        />
      </div>
      <div className={styles.p_page_content}>
        <div className="l-container">
          <div className={styles.p_works}>
            <div className={styles.p_works__head}>
              <h1 className='c-txt__lg c-txt__weight--700'>
                {postData.title}
              </h1>
              <Date dateString={postData.date} />
              <div className={styles.p_works__tag}>
                <p className='c-txt__min c-txt__height--1 c-txt__letter--0'>{postData.tag_1}</p>
                <p className='c-txt__min c-txt__height--1 c-txt__letter--0'>{postData.tag_2}</p>
              </div>
              <div className='u-mt32' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              <div className='u-align center u-mt80'>
                <Link href={postData.previous} className='c-btn--dark sm'>前へ</Link>
                <Link href="/works" className='c-btn__line sm'>Works一覧へ</Link>
                <Link href={postData.next} className='c-btn--dark sm'>次へ</Link>
              </div>
            </div>
            <Grid container spacing={3} className={styles.p_works__body}>
              <Grid item xs={12}>
                <Image 
                priority className={styles.p_works__img} src={postData.image1} height={300} width={400} alt="{postData.title}のイメージ1"
                />
              </Grid>
              <Grid item xs={12}>
                <Image 
                priority className={styles.p_works__img} src={postData.image2} height={300} width={400} alt="{postData.title}のイメージ2"
                />
              </Grid>
              <Grid item xs={12}>
                <Image 
                priority className={styles.p_works__img} src={postData.image3} height={300} width={400} alt="{postData.title}のイメージ3"
                />
              </Grid>
              <Grid item xs={12}>
                <Image 
                priority className={styles.p_works__img} src={postData.image4} height={300} width={400} alt="{postData.title}のイメージ4"
                />
              </Grid>
              <Grid item xs={12}>
                <Image 
                priority className={styles.p_works__img} src={postData.image5} height={300} width={400} alt="{postData.title}のイメージ5"
                />
              </Grid>
            </Grid>
          </div>
        </div>
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