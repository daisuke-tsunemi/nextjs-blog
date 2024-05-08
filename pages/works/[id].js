import Layout from '../layouts/layout'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Keyboard, Scrollbar, A11y, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <link rel="canonical" href="" />
      </Head>
      <div className='page__header'>
        <Image 
          priority className='page__header--img' src={postData.thumbnail} height={300} width={400} alt="{postData.title}のイメージ1"
        />
      </div>
      <div className='l-container'>
        <section className='p_works'>
          <div className='p_works__head'>
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
              <Link href={postData.previous} className='c-btn--dark sm'>前へ</Link>
              <Link href="/works" className='c-btn__line sm'>Works一覧へ</Link>
              <Link href={postData.next} className='c-btn--dark sm'>次へ</Link>
            </div>
          </div>
          <div className='p_works__body'>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              keyboard={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => console.log(swiper)}
              effect="fade"
              modules={[Navigation, Autoplay, Keyboard, Pagination, Scrollbar, A11y, EffectFade]}
              className="swiper"
              >
              <SwiperSlide>
                <Image 
                priority className='swiper__img' src={postData.image1} height={300} width={400} alt="{postData.title}のイメージ1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                priority className='swiper__img' src={postData.image2} height={300} width={400} alt="{postData.title}のイメージ2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                priority className='swiper__img' src={postData.image3} height={300} width={400} alt="{postData.title}のイメージ3"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                priority className='swiper__img' src={postData.image4} height={300} width={400} alt="{postData.title}のイメージ4"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image 
                priority className='swiper__img' src={postData.image5} height={300} width={400} alt="{postData.title}のイメージ5"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
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