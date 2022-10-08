import Image from 'next/image';
import { useStateContext } from '../../contexts/ContextProvider';

const NowPlayingImage = () => {
  const { currentSong } = useStateContext();

  return (
    <Image
      src={currentSong.image}
      width={240}
      height={180}
      alt='artist-image'
      className='object-cover object-top rounded-md'
    />
  );
};

export default NowPlayingImage;
