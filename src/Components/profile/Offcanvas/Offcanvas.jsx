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
      <button
        className="flex items-center justify-between px-8 py-2 text-lg text-white bg-orange-500 rounded-lg"
        onClick={openOffcanvas}
      >
        <span className="px-2">
          <BsPencil />
        </span>
        <span>Edit Profile</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50">
          <div className="w-3/12 h-screen transition-transform duration-100 ease-in-out transform bg-white du">
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
