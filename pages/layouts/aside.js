import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <div className='navigation'>
        <div className='navigation__wrapper'>
          <nav className='navigation__nav'>
            <Link href="/">Home</Link>
            <Link href="/posts">Blog Index</Link>
            <Link href="/details/first">Details First</Link>
          </nav>
        </div>
      </div>
    </aside>
  )
}