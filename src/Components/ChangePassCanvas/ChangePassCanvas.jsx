import { useState } from 'react';
import EditPassFrom from '../FormFields/EditPassFrom';
import Successful from '../FormFields/Successful';

const ChangePassCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const openOffcanvas = () => {
    setIsOpen(true);
  };

  const closeOffcanvas = () => {
    setIsOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTwoFunc = () => {
    closeOffcanvas();
    setCurrentPage(1);
  };

  const renderContent = () => {
    if (currentPage === 1) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 lg:justify-end">
          <div className="w-screen h-screen transition-transform duration-100 ease-in-out transform bg-white sm:w-3/12 du">
            <div className="flex items-center justify-between p-10 ">
              <div>
                <span className="block text-2xl font-bold">
                  Create Password
                </span>
                <span className="block text-lg text-gray-500">
                  johndoe007@gmail.com
                </span>
              </div>
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
            <div>{<EditPassFrom handlePageChange={handlePageChange} />}</div>
          </div>
        </div>
      );
    } else if (currentPage === 2) {
      return <div>{<Successful handleTwoFunc={handleTwoFunc} />}</div>;
    }
  };

  return (
    <>
      <div className="flex">
        <button
          className="px-5 py-2 text-sm text-blue-500 border border-blue-500 rounded-lg whitespace-nowrap"
          onClick={openOffcanvas}
        >
          Update Password
        </button>
        {isOpen && <div>{renderContent()}</div>}
      </div>
    </>
  );
};

export default ChangePassCanvas;
