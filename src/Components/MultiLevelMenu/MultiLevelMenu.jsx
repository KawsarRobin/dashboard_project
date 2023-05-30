import { Outlet } from 'react-router-dom';
import SecondLevelMenu from '../SecondLevelMenu/SecondLevelMenu';
const MultiLevelMenu = () => {
  return (
    <div className="flex border-r-2 min-h">
      <SecondLevelMenu />
      <div className="w-full h-screen sm:pl-7">
        <h1 className="text-2xl font-semibold ">
          <Outlet />
        </h1>
      </div>
    </div>
  );
};
export default MultiLevelMenu;
