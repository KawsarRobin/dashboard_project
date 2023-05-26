import { Link, NavLink, Outlet } from 'react-router-dom';
import profilePic from '../../assets/profilePic.png';
import Offcanvas from './Offcanvas/Offcanvas';

const Section = () => {
  return (
    <div>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
        <div className="flex justify-between px-8 pt-8 pb-3 bg-white border-b">
          <div>
            <div className="flex items-start ">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mr-6 rounded-full">
                <img src={profilePic} className="rounded-full" alt="" />
              </div>
              <div>
                <span className="block text-xl font-bold">John doe</span>
                <span className="block text-sm text-gray-500">
                  johndoe007@gmail.com
                </span>
              </div>
            </div>
            <NavLink className="flex justify-start gap-6 pt-8 text-lg text-gray-700">
              <Link to="personalInfo">
                <p>Personal Information</p>
              </Link>
              <Link to="addressDetails">
                <p>Address Details</p>
              </Link>
            </NavLink>
          </div>
          <div>
            <div className="">
              <Offcanvas />
            </div>
            <div>
              <span className="flex justify-end py-2 text-xs text-gray-500">
                last updated on dec 09, 2021
              </span>
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

export default Section;
