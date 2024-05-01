import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '../../lib/posts';
import Date from '../../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Posts ({ allPostsData }) {
  return (
  <>
  {allPostsData.map(({ id, date, title, thumbnail }) => (
    <Link className='listItem' key={id} href={`/posts/${id}`}>
      <h3 className='headingMd'>{title}</h3>
      <Image
        priority
        className='img'
        src={thumbnail}
        height={300}
        width={400}
        alt=""
      />
      <small className='lightText'>
        <Date dateString={date} />
      </small>
    </Link>
  ))}
  </>
  );
}
