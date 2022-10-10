import { useState, useEffect, createContext, useContext } from 'react';
import SampleImage from '../public/default_player_image.webp';
import axios from 'axios';

const StateContext = createContext();

const initialState = {
  notification: false,
  settings: false,
  profile: false,
};

export const ContextProvider = ({ children }) => {
  const [audio, setAudio] = useState(null);
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isClicked, setIsClicked] = useState(initialState);
  const [homePlayerToggle, setHomePlayerToggle] = useState(false);
  const [currentSong, setcurrentSong] = useState({
    image: SampleImage,
    title: 'sample',
    artist: 'sample',
    song: 'smaple',
  });
  const [topCharts, setTopCharts] = useState([]);
  const [topTrending, setTopTrending] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  // api fetch
  const getTopCharts = async () => {
    try {
      const { data } = await axios.get('api/top/charts');
      setTopCharts(data);
      setIsFetching(false);
    } catch (error) {
      console.log('getTopCharts error: ', error);
    }
  };

  const getTopTrending = async () => {
    try {
      const { data } = await axios.get('api/top/trending');
      setTopTrending(data);
      setIsFetching(false);
    } catch (error) {
      console.log('getTopTrending error: ', error);
    }
  };

  useEffect(() => {
    setIsFetching(true);
    getTopCharts();
    getTopTrending();
  }, []);

  return (
    <StateContext.Provider
      value={{
        audio,
        setAudio,
        activeMenu,
        setActiveMenu,
        isClicked,
        screenSize,
        homePlayerToggle,
        currentSong,
        setcurrentSong,
        setHomePlayerToggle,
        setScreenSize,
        initialState,
        setIsClicked,
        handleClick,
        topCharts,
        setTopCharts,
        isFetching,
        setIsFetching,
        topTrending,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
