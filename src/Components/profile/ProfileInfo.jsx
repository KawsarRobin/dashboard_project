import { AiOutlineHome } from 'react-icons/ai';
import Section from './ProfileSection.jsx';

const ProfileInfo = () => {
  return (
    <div className="h-screen text-gray-800 border-x-2">
      <header className="flex items-start h-20 py-6 sm:px-10">
        <div>
          <div className="relative flex justify-between w-full text-sm font-semibold text-Xl sm:-ml-2">
            <span>
              {' '}
              <AiOutlineHome />
            </span>{' '}
            <span>Profile</span>
          </div>
        </div>
        <div className="flex items-center flex-shrink-0 ml-auto">
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
      </header>
      <div className="flex flex-col justify-between space-y-6 md:space-y-0 md:flex-row">
        <div className="mr-6">
          <h4 className="pl-3 text-3xl font-bold">Profile Info</h4>
        </div>
      </div>
      <main className="p-6 space-y-6 sm:p-10">{<Section />}</main>
    </div>
  );
};

export default ProfileInfo;
