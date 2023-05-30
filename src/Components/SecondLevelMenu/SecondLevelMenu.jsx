import { useState } from 'react';
import { BsCommand } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { IoIosArrowBack } from 'react-icons/io';
import { VscKey } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const SecondLevelMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={` ${
          open ? 'w-72 ' : 'w-20 '
        } bg-dark-purple h-screen bg-white border-blue-200  min-h-screen  p-5  pt-8 relative duration-300`}
      >
        <IoIosArrowBack
          className={`absolute cursor-pointer -right-3 w-7 text-bold bg-white shadow text-2xl p-1 border-2 rounded-full  ${
            !open && 'rotate-180'
          } text-3xl shadow `}
          onClick={() => setOpen(!open)}
        />
        <div>
          <div
            className={` origin-left  font-bold text-xl duration-200 ${
              !open && 'scale-0'
            }`}
          >
            <div className="flex items-center pb-8 border-b-2 ">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mr-2 text-2xl text-white bg-red-400 rounded-full">
                <span>
                  <CgProfile />
                </span>
              </div>
              <div>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
        <ul className="pt-6">
          <Link to="/navbar/profile/profileInfo/personalInfo">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-600 font-semibold text-lg items-center gap-x-4 
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
          <Link to="changePassword">
            <li className="flex items-center p-2 text-lg font-semibold text-gray-600 rounded-md cursor-pointer hover:bg-light-white gap-x-4 ">
              <div className="flex items-center py-4 gap-x-4 active:border-blue-500">
                <span>
                  <VscKey />
                </span>
                <span
                  className={`${!open && 'hidden'} origin-left duration-200`}
                >
                  Change Password
                </span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default SecondLevelMenu;
