import Link from 'next/link';
import Image from 'next/image';
export default function About() {
  return (
    <div className='p_section p_about'>
      <div className='l-container'>
        <div className='p_section__head'>
          <h2 className='c-txt__xl c-txt--center'>私たちについて</h2>
        </div>
        <div className='p_section__body l-grid--3 u-gap40'>
          <Image
            src='/images/home/sample_1.jpg'
            height={200}
            width={300}
            alt="ご利用のイメージ6"
          />
          <div>
            <h3 className='c-txt__lg c-txt--center'>私たちについて私たちについて</h3>
            <p className='c-txt__md u-mt24'>私たちについて私たちについて私たちについて私たちについて私たちについて私たちについて
            私たちについて私たちについて私たちについて私たちについて私たちについて私たちについて私たちについて私たちについて私たちについて私たちについて
            </p>
          </div>
          <Image
            src='/images/home/sample_1.jpg'
            height={200}
            width={300}
            alt="ご利用のイメージ6"
          />
        </div>
        <div className='p_section__foot u-align center'>
          <Link className='c-btn lg' href="/about">詳しく見る</Link>
        </div>
      </div>
    </div>
  )
}