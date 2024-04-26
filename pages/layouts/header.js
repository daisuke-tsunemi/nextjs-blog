import Image from 'next/image';
import Link from 'next/link';
import Navi from '../layouts/navi';
// import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';
import layoutStyles from '../../styles/css/layout.module.css';

export default function Header() {
  return (
    <header className={layoutStyles.header}>
    <>
      <div className='container'>
        <h2 className='c-txt__min'>
        Your NameYour NameYour NameYour NameYour Name
        </h2>
        <div className='logo'>
          <Link href="/">
            <Image
              priority
              src="/images/logo/logo.png"
              height={48}
              width={48}
              alt=""
            />
          </Link>
        </div>
        {/* <div>
          <Link href="/">
            <ForwardToInboxTwoToneIcon color="secondary" />
          </Link>
        </div> */}
        <Navi />
      </div>
    </>
  </header>
  )
}