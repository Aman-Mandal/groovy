/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import { Avatar, Button, IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { useStateContext } from '../../contexts/ContextProvider';
import MenuIcon from '@mui/icons-material/Menu';
import { NotificationModal } from '../index';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
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
      className={`flex items-center justify-between my-4 px-8 ${
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
          <Link href='/Podcast'>
            <a className='uppercase font-light swatch_text-primary hover:text-blue-600 focus:text-blue-600'>
              podcast
            </a>
          </Link>
          <Link href='/'>
            <a className='uppercase font-light swatch_text-primary'>live</a>
          </Link>
        </div>

        <div className='hidden relative lg:flex items-center p-3 gap-2 border-[1px] border-gray-500 rounded-md swatch_bg-brown'>
          <SearchBar placeholder='Search the songs here...' data={songs} />
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
          {session?.user ? (
            <Tooltip title='Profile'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button>
                    <Avatar alt='Remy Sharp' src={SessionObj?.image} />
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
                            Profile
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
          ) : (
            <Button variant='outlined' className='!capitalize' onClick={signIn}>
              Login/Signup
            </Button>
          )}
        </div>
        {isClicked.notification && <NotificationModal />}
      </div>
    </div>
  );
};

export default Navbar;
