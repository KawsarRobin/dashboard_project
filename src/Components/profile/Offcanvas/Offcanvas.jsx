import { useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import EditAddressForm from './EditAddressForm';
import EditProfileForm from './EditProfileForm';

const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const openOffcanvas = () => {
    setIsOpen(true);
  };

  const closeOffcanvas = () => {
    setIsOpen(false);
  };

  const renderContent = () => {
    if (currentPage === 1) {
      return <div>{<EditProfileForm closeOffcanvas={closeOffcanvas} />}</div>;
    } else if (currentPage === 2) {
      return <div>{<EditAddressForm closeOffcanvas={closeOffcanvas} />}</div>;
    }
  };

  return (
    <div className="flex">
      <div>
        <button
          className="flex items-center justify-between px-4 text-sm text-white bg-orange-500 rounded-lg xs:px-3 y-2 sm:px-4 sm:py-1 sm:text-base"
          onClick={openOffcanvas}
        >
          <span className="px-1">
            <BsPencil />
          </span>
          <span>Edit Profile</span>
        </button>
        <div>
          <span className="flex justify-end py-2 text-xs text-gray-500">
            last updated on dec 09, 2021
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50">
          <div className="w-screen h-screen transition-transform duration-100 ease-in-out transform bg-white sm:w-3/12 du">
            <div className="flex items-center justify-between px-4 py-3 ">
              <h5 className="p-6 text-3xl font-semibold">Edit Profile</h5>
              <button type="button " onClick={closeOffcanvas}>
                <svg
                  className="w-6 h-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex justify-center gap-6 pt-8 pb-6 text-lg font-semibold text-gray-800 border-b-2">
              <Link to="personalInfo" onClick={() => setCurrentPage(1)}>
                <p>Personal Information</p>
              </Link>
              <Link to="addressDetails" onClick={() => setCurrentPage(2)}>
                <p>Address Details</p>
              </Link>
            </nav>
            <div>{renderContent()}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offcanvas;
