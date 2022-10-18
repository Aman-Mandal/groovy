import Image from 'next/image';
import { useStateContext } from '../../contexts/ContextProvider';

const NowPlayingImage = () => {
  const { currentSong } = useStateContext();

  return (
    // width of on 240 large,70 on medium and on small
    <div className='w-10 sm:w-16 lg:w-60 relative aspect-square'>
      <Image
        src={currentSong.image}
        layout='fill'
        alt='artist-image'
        className='object-cover object-top rounded-md'
      />
    </div>
  );
};

export default NowPlayingImage;
