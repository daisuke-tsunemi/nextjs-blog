import Link from 'next/link';
import Image from 'next/image';
export default function Service() {
  return (
    <div className='p_section p_service'>
      <div className='l-container__1200'>
        <div className='p_section__head'>
          <h2 className='c-txt__xl'>サービスご紹介</h2>
        </div>
        <div className='p_section__body'>
          <div className='l-grid--2 u-gap24'>
            <div className='l-grid--item'>
              <div className='l-grid--item__body u-flex u-gap24'>
                <div className='c-image'>
                  <Image
                  src='/images/home/sample_1.jpg'
                  height={80}
                  width={100}
                  alt="ご利用のイメージ1"
                  />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
              </div>
            </div>
            <div className='l-grid--item'>
              <div className='l-grid--item__body u-flex u-gap24'>
                <div className='c-image'>
                  <Image
                  src='/images/home/sample_1.jpg'
                  height={80}
                  width={100}
                  alt="ご利用のイメージ1"
                  />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
              </div>
            </div>
            <div className='l-grid--item'>
              <div className='l-grid--item__body u-flex u-gap24'>
                <div className='c-image'>
                  <Image
                  src='/images/home/sample_1.jpg'
                  height={80}
                  width={100}
                  alt="ご利用のイメージ1"
                  />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
              </div>
            </div>
            <div className='l-grid--item'>
              <div className='l-grid--item__body u-flex u-gap24'>
                <div className='c-image'>
                  <Image
                  src='/images/home/sample_1.jpg'
                  height={80}
                  width={100}
                  alt="ご利用のイメージ1"
                  />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
              </div>
            </div>
            <div className='l-grid--item'>
              <div className='l-grid--item__body u-flex u-gap24'>
                <div className='c-image'>
                  <Image
                  src='/images/home/sample_1.jpg'
                  height={80}
                  width={100}
                  alt="ご利用のイメージ1"
                  />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
              </div>
            </div>
            <div className='l-grid--item'>
              <div className='l-grid--item__body u-flex u-gap24'>
                <div className='c-image'>
                  <Image
                  src='/images/home/sample_1.jpg'
                  height={80}
                  width={100}
                  alt="ご利用のイメージ1"
                  />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
              </div>
            </div>
            <div className='l-grid--item'>
              <div className='l-grid--item__body u-flex u-gap24'>
                <div className='c-image'>
                  <Image
                  src='/images/home/sample_1.jpg'
                  height={80}
                  width={100}
                  alt="ご利用のイメージ1"
                  />
                </div>
                <div className='c-txt'>
                  <h3 className='c-txt__md c-txt__weight--700'>お気軽にお問い合わせください</h3>
                  <p className='c-txt__sm u-mt8'>
                    ご利用の流れテクストご利用の流れテクストご利用の流れテクストご利用の流れテクスト
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p_section__foot u-align center'>
          <Link className='c-btn lg' href="/service">詳しく見る</Link>
        </div>
      </div>
    </div>
  )
}