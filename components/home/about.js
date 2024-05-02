import Link from 'next/link';
import Image from 'next/image';
export default function About() {
  return (
    <div className='p_section p_about'>
      <div className='l-container__1200'>
        <div className='p_section__head'>
          <h2 className='c-txt__xl2'>About Us<span className='c-txt__lg c-unit__after'>– 私たちについて</span></h2>
        </div>
        <div className='p_section__body l-grid--3 u-gap40'>
          <Image
            src='/images/home/sample_1.jpg'
            height={200}
            width={300}
            alt="ご利用のイメージ6"
          />
          <div>
            <h3 className='c-txt__lg c-txt--center'>ユーザーを、ビジネスを、ミツメルデザイン</h3>
            <p className='c-txt__md u-mt24'>
              はじめまして、ミツメルデザインと申します！<br />
              私たちはWebデザインとグラフィックデザイン開発を通じて、ビジネスの成果を最大化することに情熱を注いでいます。<br />
              ミツメルデザインのアプローチは、ビジネスの目標や戦略に沿った効果的なデザインを提供することにあります。利用者のニーズを理解し、本当に価値のある体験を提供することで、ビジネスの成功に貢献します。<br />
              UXデザインにおいては、利用者が直面する課題やニーズを解決するための効果的なデザインを追求します。同時に、メリットだけでなく、潜在的なベネフィットを最大化するためのデザインアプローチを取り入れ、ビジネスの成果を向上させます。<br />
              ミツメルデザインの使命は、ユーザーとビジネスの両方に焦点を当て、効果的なデザインを提供することです。お困りの際は、ぜひお気軽にご相談ください。ビジネスの価値を共に創り上げましょう。
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
          {/* <Link className='c-btn lg' href="/about">詳しく見る</Link> */}
        </div>
      </div>
    </div>
  )
}