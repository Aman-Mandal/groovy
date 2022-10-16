import ArtistInfo from '../components/Artist/ArtistInfo';

const Artists = () => {
  return (
    <ArtistInfo
      isVerifiedArtist={true}
      artistUserName='blackbear'
      monthlyListeners='22,221,217'
    />
  );
};

export default Artists;
