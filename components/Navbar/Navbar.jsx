import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className="h-16 bg-black text-white text-xs flex justify-between px-4">
      <ul className='flex space-x-4 my-auto'>
        <li>MUSIC</li>
        <li>PODCAST</li>
        <li>LIVE</li>
      </ul>
      <div className="input relative flex items-center">
        <input 
          type="text" 
          className='w-64 py-2 border-2 border-gray-500 rounded-md bg-[#21262b] indent-10 focus:outline-none'
          placeholder='Type here to search' />
        <div className="sIcon absolute left-2 top-6">
          <SearchIcon fontSize='small'/>
        </div>
      </div>
      <div className='flex items-center space-x-5'>
        <NotificationsIcon fontSize='small'/>
        <SettingsIcon fontSize='small'/>
        <div className="profile min-w-[170px] my-4 bg-slate-800 flex rounded-md">
          <div className="profile-image bg-slate-700 p-1 rounded-md flex justify-center items-center">
            <AccountBoxIcon fontSize='small'/>
          </div>
          <p className='flex px-2 items-center'>User Name</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar