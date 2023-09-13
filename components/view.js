import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Keyboard, Scrollbar, A11y, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from '../styles/css/utils.module.css'
export default () => {
  return (
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
        <img src="/images/home/sample_5.jpg" alt="{name}イメージ" className={styles.swiperImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/home/sample_4.jpg" alt="{name}イメージ" className={styles.swiperImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/home/sample_2.jpg" alt="{name}イメージ" className={styles.swiperImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/home/sample_5.jpg" alt="{name}イメージ" className={styles.swiperImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/home/sample_4.jpg" alt="{name}イメージ" className={styles.swiperImg} />
      </SwiperSlide>
    </Swiper>
  );
};