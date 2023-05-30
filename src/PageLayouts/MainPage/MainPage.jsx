import { Outlet } from 'react-router-dom';
import Menus from '../../Components/Menus/Menus';

const MainPage = () => {
  return (
    <div className="flex bg-white lg:bg-gray-100 xs:bg-white sm:flex-row">
      <Menus />
      <div className="flex-grow text-gray-800 lg:h-screen lg:overflow-scroll no-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
