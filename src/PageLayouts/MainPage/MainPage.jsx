import { Outlet } from 'react-router-dom';
import Menus from '../../Components/Menus/Menus';

const MainPage = () => {
  return (
    <div className="flex bg-white lg:bg-gray-100 xs:bg-white sm:flex-row ">
      <Menus />
      <div className="flex-grow h-screen text-gray-800 ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
