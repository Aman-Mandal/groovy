import Image from 'next/image';
import { useStateContext } from '../../contexts/ContextProvider';

const NowPlayingImage = ({ width, height }) => {
  const { currentSong } = useStateContext();

  return (
    <Image
      src={currentSong.image}
      width={width}
      height={height}
      alt='artist-image'
      className='object-cover object-top rounded-md'
    />
  );
};

export default NowPlayingImage;
