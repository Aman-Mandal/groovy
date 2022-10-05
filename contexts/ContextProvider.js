import { useState, createContext, useContext } from "react";

const StateContext = createContext();

const initialState = {
  notification: false,
  settings: false,
  profile: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isClicked, setIsClicked] = useState(initialState);
  const [homePlayerToggle, setHomePlayerToggle] = useState(false);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        screenSize,
        homePlayerToggle,
        setHomePlayerToggle,
        setScreenSize,
        initialState,
        setIsClicked,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
