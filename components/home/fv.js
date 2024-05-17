import Image from 'next/image';
export default function Fv() {
  return (
    <section className='p_fv'>
      <div className="l-container">
        <div className="p_fv__body">
          <Image
            priority
            src="/images/logo/logo_set.png"
            height={80}
            width={120}
            alt="Mitsumeru ロゴ"
            className='p_fv__logo'
          />
          <h2 className="p_fv__head--title c-txt__xl2 c-txt--center">
              <strong>事業</strong>を<span>見つめる</span><strong>デザイン</strong>を
          </h2>
          <h3 className="c-txt__md u-align--center">
              私たちは、デジタルに強みをもつだけでなく、課題解決、ビジネス変革、そしてサービス開発、あらゆるジャンルのアイデアを統合することで、ブランドと人々の間に強い絆をつくることにチャレンジします。志のあるブランドとともに、そして自らの事業を通じて、マーケットを創造し、文化を発展させ、より多様で豊かな未来を目指します。
          </h3>
        </div>
      </div>
    </section>
  )
}