import { Link, NavLink, Outlet } from 'react-router-dom';
import profilePic from '../../assets/Images/profilePic.png';
import Offcanvas from '../EditProfile/EditProfile';

const ProfileSection = () => {
  return (
    <div>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
        <div className="px-8 pt-8 pb-3 border-b ">
          <div>
            <div className="flex flex-col items-end justify-between space-x-2 md:items-start md:flex-row lg:flex-row">
              <div className="flex items-start justify-start">
                <div className="w-16 h-16 mr-6 rounded-full ">
                  <img src={profilePic} className="rounded-full" alt="" />
                </div>
                <div>
                  <span className="block text-xl font-bold">John doe</span>
                  <span className="block text-sm text-gray-500">
                    johndoe007@gmail.com
                  </span>
                </div>
              </div>
              {/* Offcanvas */}
              <div className="">
                <Offcanvas />
              </div>
            </div>

            <div>
              <NavLink className="flex justify-start gap-6 pt-8 text-lg text-gray-700 ">
                <Link to="personalInfo">
                  <p>Personal Information</p>
                </Link>
                <Link to="addressDetails">
                  <p>Address Details</p>
                </Link>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 ">
        <Outlet />
      </section>
    </div>
  );
};

export default ProfileSection;
