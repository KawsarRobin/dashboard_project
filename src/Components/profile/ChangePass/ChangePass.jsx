import { AiOutlineHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import PasswordSection from './passwordSection';

const ChangePass = () => {
  return (
    <div className="text-gray-800 ">
      <header className="flex justify-between h-20 py-6 sm:px-10">
        <div>
          <div className="flex items-center text-sm font-semibold justify-evenly text-Xl sm:-ml-2">
            <div className="pl-2 text-lg">
              <AiOutlineHome />
            </div>
            <div className="pl-2">
              <span>Profile</span>
            </div>
            <div className="pl-2">
              <IoIosArrowForward />
            </div>
            <div className="text-blue-500">
              <span>Change Password</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-shrink-0 ml-auto">
            <div className="pl-3 ml-3 space-x-1 border-l">
              {/* Notification button */}
              <button className="relative p-2 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600">
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                <span className="absolute top-0 right-0 w-2 h-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="flex items-start h-20 sm:px-10">
        <div className="mr-6">
          <h4 className="font-bold xl:text-3xl md:text-2xl sm:text-xl ">
            Change Password
          </h4>
        </div>
      </div>
      <main className="h-screen space-y-6 bg-white rounded-lg md:p-6 md:mx-10 sm:p-10">
        {<PasswordSection />}
      </main>
    </div>
  );
};

export default ChangePass;
