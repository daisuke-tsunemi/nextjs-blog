import Image from 'next/image';
import Link from 'next/link';
import Navi from '../layouts/navi';
import styles from "../../styles/layouts/header.module.scss";
import React, {useState} from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <React.Fragment>
      <header className={styles.layout}>
        <div className={styles.layoutContainer}>
          <div className='u-align'>
            <Link href="/">
              <Image
                priority
                src="/images/logo/logo_horizontal.png"
                height={64}
                width={140}
                alt="ロゴ"
                className={styles.logo}
              />
            </Link>
            <h2 className='c-txt__min'>
            ユーザーを、ビジネスを、<br className="off_md"/>ミツメルデザイン
            </h2>
          </div>
          <div className={`${styles.navWrapper} ${openMenu ? styles.open : undefined}`}>
            <Navi />
          </div>
          <div className={`${styles.navToggle__wrapper} ${openMenu ? styles.open : undefined}`}>
            <button className={styles.navToggle} onClick={() => menuFunction()}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}