import { useRouter } from 'next/router';

const Artist = () => {
  const {
    query: { artistId },
  } = useRouter();

  return <div className='text-white' >{artistId}</div>;
};

export default Artist;
