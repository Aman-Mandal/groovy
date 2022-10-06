/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import {
  IconButton,
  Tooltip,
  InputAdornment,
  TextField,
  Avatar,
} from '@mui/material';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useStateContext } from '../../contexts/ContextProvider';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationModal from '../NotificationModal/NotificationModal';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Image } from 'next/image';
import classNames from 'classnames';
import SearchBar from './SearchBar';
import { songs } from '../../data/trendingSongsData';
const NavButton = ({ title, icon, func }) => {
  return (
    <Tooltip title={title}>
      <IconButton
        type='button'
        className='relative swatch_text-primary rounded-full'
        onClick={func}
      >
        <span className='absolute rounded-full h-2 w-2 right-2 top-3 swatch_bg-secondary'></span>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    setScreenSize,
    isClicked,
    handleClick,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const SessionObj = {
    name: '',
    email: '',
    image: '',
  };
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    SessionObj.name = ` ${session.user.name}`;
    SessionObj.email = `${session.user.email}`;
    SessionObj.image = `${session.user.image}`;
  }

  return (
    <div
      className={`flex relative items-center justify-between my-4 px-8 ${
        activeMenu && 'md:ml-72'
      }`}
    >
      <div className='flex items-center gap-32'>
        <div className='flex items-center gap-8'>
          <IconButton
            type='button'
            className='relative swatch_text-primary rounded-full'
            onClick={() => setActiveMenu((prev) => !prev)}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/'>
            <a className='uppercase font-light swatch_text-secondary'>music</a>
          </Link>
          <Link href='/'>
            <a className='uppercase font-light swatch_text-primary'>podcast</a>
          </Link>
          <Link href='/'>
            <a className='uppercase font-light swatch_text-primary'>live</a>
          </Link>
        </div>

        <div className='absolute top-0 left-0 right-0 mx-auto w-fit'>
          <div className='hidden lg:block top-0 rounded-lg p-3 gap-2 border-[1px] border-gray-500 swatch_bg-brown'>
            {/* <SearchIcon className="text-gray-300" fontSize="small" />
          <input
            type="text"
            placeholder="Type here to search"
            className="outline-none border-none text-gray-300 placeholder-gray-300 bg-transparent"
          /> */}
            <SearchBar placeholder='Search the songs here' data={songs} />
          </div>
        </div>
      </div>

      <div className='flex items-center'>
        <NavButton
          icon={<NotificationsIcon />}
          title={'Notifications'}
          func={() => handleClick('notification')}
        />
        <NavButton icon={<SettingsIcon />} title={'Settings'} func={() => {}} />
        <div
          className='flex items-center space-x-4 
        justify-end text-gray-500'
        >
          {/* borderRadius :'10px' */}

          <img
            src={SessionObj.image}
            alt='none'
            style={{ width: 40, height: 40, borderRadius: '50px' }}
          />
          <p className='hidden md:inline cursor-pointer text-white'>
            {SessionObj.name}
          </p>

          <Tooltip title='Profile'>
            <Menu as='div' className='relative inline-block text-left'>
              <div>
                {/* Login singup */}
                <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                  Login/Signup
                  <ChevronDownIcon
                    className='-mr-1 ml-2 h-5 w-5'
                    aria-hidden='true'
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item onClick={signIn}>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Login
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          License
                        </a>
                      )}
                    </Menu.Item>
                    <form method='POST' action='#'>
                      <Menu.Item onClick={signOut}>
                        {({ active }) => (
                          <button
                            type='submit'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block w-full text-left px-4 py-2 text-sm'
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </Tooltip>
        </div>
        {isClicked.notification && <NotificationModal />}
      </div>
    </div>
  );
};

export default Navbar;
