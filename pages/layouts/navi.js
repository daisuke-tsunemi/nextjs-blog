import Link from 'next/link';
import styles from "../../styles/layouts/header.module.scss";

export default function Navi() {
  return (
    <nav className={styles.navi__list}>
      <Link className={styles.navi__item} href="/">Home</Link>
      <Link className={styles.navi__item} href="/works">Works</Link>
      {/* <Link className={styles.navi__item} href="/service">Service</Link> */}
      <Link className={styles.navi__item} href="/contact">Contact</Link>
    </nav>
  )
}