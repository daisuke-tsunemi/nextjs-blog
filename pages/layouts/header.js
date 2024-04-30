import Image from 'next/image';
import Link from 'next/link';
import Navi from '../layouts/navi';
// import ForwardToInboxTwoToneIcon from '@mui/icons-material/ForwardToInboxTwoTone';

export default function Header() {
  return (
    <header className='l-header'>
    <>
      <div className='container'>
        <h2 className='c-txt__min'>
        ユーザーを、ビジネスを、ミツメルデザイン
        </h2>
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