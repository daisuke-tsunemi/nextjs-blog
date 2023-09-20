import Link from 'next/link';
import layoutStyles from '../../styles/css/layout.module.css';

export default function Aside() {
  return (
    <aside className={layoutStyles.sidebar}>
      <div className="p-menu">
        <div className="p-menu__wrapper">
          <nav className="p-menu__nav">
            <Link href="/">Home</Link>
            <Link href="/posts">Blog Index</Link>
            <Link href="/details/first">Details First</Link>
          </nav>
        </div>
      </div>
    </aside>
  )
}