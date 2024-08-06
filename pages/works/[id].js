import Layout from '../layouts/layout'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/works'
import Date from '../../components/date';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Keyboard, Scrollbar, A11y, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from "../../styles/pages/works.module.scss";

export default function Works({ postData }) {
  const images = ['image1','image2','image3','image4','image5','image6'];
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <link rel="canonical" href="" />
      </Head>
      <div className={styles.heading}>
        <Image 
        priority className={styles.heading__img} src={postData.image1} height={300} width={400} alt={`${postData.title} ${"のイメージ1"}`}
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
              <div className='u-mt24'>
                <Link href={postData.link} className='c-btn__text' target='_blank' rel='noreferrer'>関連リンク</Link>
              </div>
              <div className='u-mt32' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              <div className='u-align center u-mt80'>
                <Link href={postData.previous} className='c-btn--dark sm'>前へ</Link>
                <Link href="/works" className='c-btn__line sm'>Works一覧へ</Link>
                <Link href={postData.next} className='c-btn--dark sm'>次へ</Link>
              </div>
            </div>
            <div container spacing={3} className={`${styles.p_works__body} ${postData.category}`}>
              
              <div className={styles.p_works__bodyGra}>
                <div className='l-grid u-gap8'>
                  <picture className='l-grid--item'>
                    <Image 
                    priority className={styles.p_works__img} src={postData.image1} height={300} width={400} alt={`${postData.title} ${"のイメージ1"}`}
                    />
                  </picture>
                  <picture className='l-grid--item'>
                    <Image 
                    priority className={styles.p_works__img} src={postData.image2} height={300} width={400} alt={`${postData.title} ${"のイメージ"}`}
                    />
                  </picture>
                  <picture className='l-grid--item'>
                    <Image 
                    priority className={styles.p_works__img} src={postData.image3} height={300} width={400} alt={`${postData.title} ${"のイメージ3"}`}
                    />
                  </picture>
                  <picture className='l-grid--item'>
                    <Image 
                    priority className={styles.p_works__img} src={postData.image4} height={300} width={400} alt={`${postData.title} ${"のイメージ4"}`}
                    />
                  </picture>
                  <picture className='l-grid--item'>
                    <Image 
                    priority className={styles.p_works__img} src={postData.image5} height={300} width={400} alt={`${postData.title} ${"のイメージ5"}`}
                    />
                  </picture>
                  <picture className='l-grid--item'>
                    <Image 
                    priority className={styles.p_works__img} src={postData.image6} height={300} width={400} alt={`${postData.title} ${"のイメージ6"}`}
                    />
                  </picture>
                </div>
              </div>
              <div className={styles.p_works__bodyWeb}>
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                keyboard={true}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                effect="fade"
                modules={[Navigation, Autoplay, Keyboard, Pagination, Scrollbar, A11y, EffectFade]}
                className="swiper"
                >
                  <SwiperSlide>
                    <div className={styles.c_bg__pc}>
                      <picture>
                        <Image 
                        priority className={styles.p_works__img} src={postData.image2} height={300} width={400} alt={`${postData.title} ${"のイメージ1"}`}
                        />
                      </picture>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.c_bg__pc}>
                      <picture>
                        <Image 
                        priority className={styles.p_works__img} src={postData.image2} height={300} width={400} alt={`${postData.title} ${"のイメージ2"}`}
                        />
                      </picture>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.c_bg__pc}>
                      <picture>
                    <Image 
                    priority className={styles.p_works__img} src={postData.image3} height={300} width={400} alt={`${postData.title} ${"のイメージ3"}`}
                    />
                    </picture>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.c_bg__pc}>
                      <picture>
                    <Image 
                    priority className={styles.p_works__img} src={postData.image4} height={300} width={400} alt={`${postData.title} ${"のイメージ4"}`}
                    />
                    </picture>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.c_bg__pc}>
                      <picture>
                    <Image 
                    priority className={styles.p_works__img} src={postData.image5} height={300} width={400} alt={`${postData.title} ${"のイメージ5"}`}
                    />
                    </picture>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.c_bg__pc}>
                      <picture>
                    <Image 
                    priority className={styles.p_works__img} src={postData.image6} height={300} width={400} alt={`${postData.title} ${"のイメージ6"}`}
                    />
                    </picture>
                  </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              
            </div>
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