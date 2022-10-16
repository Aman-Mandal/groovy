import React from 'react';
import Image from 'next/image';
import verifiedIcon from '../../public/verfiiedIcon.png';

const ArtistInfo = (props) => {
  return (
    <div>
      <div className='w-screen lg:h-80 sm:h-60 bg-black-bear-image bg-no-repeat pt-24 pl-8 bg-cover'>
        {props.isVerifiedArtist ? (
          <div className='flex'>
            {' '}
            <div className='h-8 w-8'>
              <Image src={verifiedIcon} alt='verified icon' />{' '}
            </div>
            <div className='text-white font-bold pt-1 pl-2 pb-6'>
              Verified Artist
            </div>
          </div>
        ) : (
          <div className='text-white font-bold'> User Profile</div>
        )}
        <div className='text-white font-black text-7xl pb-8'>
          {props.artistUserName}
        </div>
        <div className='text-white font-bold'>
          {' '}
          {props.monthlyListeners} Monthly Listeners
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ArtistInfo;
