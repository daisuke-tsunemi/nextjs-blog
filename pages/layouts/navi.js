import Link from 'next/link';

export default function Navi() {
  return (
    <div className='navi'>
      <div className='navi__wrapper'>
        <nav className='navi__list'>
          <Link className='navi__item' href="/">Home</Link>
          <Link className='navi__item' href="/works">Works</Link>
          <Link className='navi__item' href="/about">About</Link>
          <Link className='navi__item' href="/service">Service</Link>
          <Link className='navi__item' href="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  )
}