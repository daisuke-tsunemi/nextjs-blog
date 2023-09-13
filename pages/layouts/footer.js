import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/css/layout/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.layout}>
      <div className="grid grid-cols-2 gap-4">
        <div className="logo">
          <Image
            priority
            src="https://og-image.vercel.app/nextjs-black-logo.svg"
            className={styles.logo}
            width={200}
            height={80}
            alt="Nextのロゴ"
          />
        </div>
        <div className={'ml-auto'}>
          <ul className={'text-right'}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Blog Index</Link>
            </li>
            <li>
              <Link href="/details/first">Details First</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}