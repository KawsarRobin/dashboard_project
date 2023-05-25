import { useState } from 'react';
import { BsCommand } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { IoIosArrowBack } from 'react-icons/io';
import { VscKey } from 'react-icons/vsc';
import { Link, Outlet } from 'react-router-dom';
const Profile = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-10 '
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <IoIosArrowBack
          className={`absolute cursor-pointer -right-3 w-7 text-bold bg-white shadow text-2xl p-1 border-2 rounded-full  ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="">
          <h1
            className={` origin-left  font-bold text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            <div className="flex items-center gap-x-4 border-b-2 pb-8">
              <span>
                <CgProfile />
              </span>
              <span>Profile</span>
            </div>
          </h1>
        </div>
        <ul className="pt-6">
          <Link to="profileInfo">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-600 font-semibold text-sm items-center gap-x-4 
            } `}
            >
              <div className="flex items-center gap-x-4">
                <span>
                  <BsCommand />
                </span>
                <span
                  className={`${
                    !open && 'hidden'
                  } pt-2 origin-left duration-200`}
                >
                  Profile Info
                </span>
              </div>
            </li>
          </Link>
          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white font-semibold text-gray-600  text-sm items-center gap-x-4 
            } `}
          >
            <div className="flex items-center py-2 gap-x-4">
              <span>
                <VscKey />
              </span>
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                Change Password
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="h-screen w-full pl-7">
        <h1 className="text-2xl font-semibold ">
          <Outlet />
        </h1>
      </div>
    </div>
  );
};
export default Profile;
