import { AiOutlineDashboard, AiOutlineLogout } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GiPapers } from 'react-icons/gi';
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
      <div className="flex flex-col justify-center flex-grow space-y-20 text-2xl text-[#d4d4d4] ">
        <nav className="flex flex-col my-6 space-y-12 navStyle">
          <Link
            to="dashboard"
            className="inline-flex items-center justify-center text-[#d4d4d4] focus:text-white hover:text-white"
          >
            <span className="sr-only">Dashboard</span>
            <AiOutlineDashboard />
          </Link>
          <Link
            to=""
            className="inline-flex items-center justify-center focus:text-white hover:text-white"
          >
            <span className="sr-only"></span>
            <GiPapers />
          </Link>

          <Link
            to="/navbar/profile/profileInfo/personalInfo"
            href="#"
            className="inline-flex items-center justify-center focus:text-white hover:text-white"
          >
            <span className="sr-only">Profile</span>
            <CgProfile />
          </Link>
          <Link
            to=""
            className="inline-flex items-center justify-center focus:text-white hover:text-white"
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
