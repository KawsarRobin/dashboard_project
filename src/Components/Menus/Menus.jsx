import { AiOutlineLogout } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GiPapers } from 'react-icons/gi';
import { GrDashboard } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo1.png';
import oval from '../../assets/Images/oval.png';

const Menus = () => {
  return (
    <aside className="bg-white border-blue-200 sm:flex sm:flex-col border-x-2">
      <div>
        <Link
          href="#"
          className="inline-flex items-center justify-center w-20 h-20 bg-purple-500 focus:bg-purple-500"
        >
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-grow space-y-20 text-2xl text-gray-500 ">
        <nav className="flex flex-col mx-4 my-6 space-y-12 ">
          <Link
            to="dashboard"
            className="inline-flex items-center justify-center py-3 rounded-lg hover:text-gray-400 hover:bg-gray-700 focus:bg-blue-400 focus:text-white"
          >
            <span className="sr-only">Dashboard</span>
            <GrDashboard />
          </Link>
          <Link
            to=""
            className="inline-flex items-center justify-center py-3 rounded-lg hover:text-gray-400 hover:bg-gray-700 focus:bg-blue-400 focus:text-white focus:border-l-2 focus:border"
          >
            <span className="sr-only"></span>
            <GiPapers />
          </Link>

          <Link
            to="/navbar/profile/profileInfo/personalInfo"
            href="#"
            className="inline-flex items-center justify-center py-3 rounded-lg hover:text-gray-400 hover:bg-gray-700 focus:bg-blue-400 focus:text-white"
          >
            <span className="sr-only">Profile</span>
            <CgProfile />
          </Link>
          <Link
            to=""
            className="inline-flex items-center justify-center py-3 rounded-lg hover:text-gray-400 hover:bg-gray-700 focus:bg-blue-400 focus:text-white"
          >
            <span className="sr-only">LogOut</span>
            <AiOutlineLogout />
          </Link>
        </nav>
      </div>
      <div>
        <Link className="inline-flex items-end justify-center w-20 h-20 ">
          <img src={oval} alt="" />
        </Link>
      </div>
    </aside>
  );
};

export default Menus;
