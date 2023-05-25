import { AiOutlineLogout } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { Link, Outlet } from 'react-router-dom';
import { ssPic } from '../../assets/Screenshot 2023-03-30 at 1.56 1.png';
const Dashboard = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100">
      <aside className="hidden sm:flex sm:flex-col border-x-2 ">
        <a
          href="#"
          className="inline-flex items-center justify-center w-20 h-20 bg-purple-500 focus:bg-purple-500"
        >
          <svg fill="none" viewBox="0 0 64 64" className="w-12 h-12">
            <title>Company logo</title>
            <path
              d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z"
              fill="#fff"
            />
          </svg>
        </a>
        <div className="flex flex-col justify-between flex-grow text-gray-500 ">
          <nav className="flex flex-col mx-4 my-6 space-y-4">
            <Link
              to=""
              className="inline-flex items-center justify-center py-3 rounded-lg hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
            >
              <span className="sr-only"></span>
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
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </Link>
            <Link
              to="dashboard"
              className="inline-flex items-center justify-center py-3 rounded-lg"
            >
              <span className="sr-only">Dashboard</span>
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </Link>
            <Link
              to="profile"
              href="#"
              className="inline-flex items-center justify-center py-3 text-red-600 bg-white rounded-lg hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
            >
              <span className="sr-only">Profile</span>
              <CgProfile />
            </Link>
            <Link
              to=""
              className="inline-flex items-center justify-center py-3 rounded-lg hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
            >
              <span className="sr-only">LogOut</span>
              <AiOutlineLogout />
            </Link>
          </nav>
          <div className="inline-flex items-center justify-center w-20 h-20 hover:text-gray-400 hover:bg-gray-300 focus:text-gray-400 focus:bg-gray-700">
            <img src={ssPic} alt="" />
          </div>
        </div>
      </aside>
      <div className="flex-grow text-gray-800">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
