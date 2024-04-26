import Link from 'next/link';

export default function Navi() {
  return (
    <div className='navi'>
      <div className='navi__wrapper'>
        <nav className='navi__list'>
          <Link href="/">Home</Link>
          <Link href="/posts">Blog Index</Link>
          <Link href="/details/first">Details First</Link>
        </nav>
      </div>
    </div>
  )
}