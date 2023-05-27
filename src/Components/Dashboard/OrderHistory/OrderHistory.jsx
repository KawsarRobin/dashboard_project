const OrderHistory = () => {
  return (
    <>
      <div className="row-span-3 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between px-6 py-5 text-xl font-semibold border-b border-gray-100">
          <span>Orders History</span>
          <button
            type="button"
            className="inline-flex justify-center px-1 -mr-1 text-sm font-medium leading-5 text-blue-500 bg-white rounded-md hover:text-gray-600"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            View Full History
            <svg
              className="w-5 h-5 ml-1 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span>
              <button className="px-1 py-1 ml-2 text-sm font-bold text-blue-500 rounded-sm bg-blue-50 ">
                New (21)
              </button>
            </span>
          </div>
          <div>
            <span>
              <button className="px-2 py-1 text-sm font-bold text-gray-500 rounded-sm ">
                In Review(39)
              </button>
            </span>
          </div>
          <div>
            <span>
              <button className="px-2 py-1 text-sm font-bold text-gray-500 rounded-sm ">
                Reviewed (245)
              </button>
            </span>
          </div>
          <div>
            <span>
              <button className="px-2 py-1 text-sm font-bold text-gray-500 rounded-sm ">
                Completed(24)
              </button>
            </span>
          </div>
        </div>
        <div className="h-full overflow-y-auto">
          <ul className="p-6 space-y-6">
            <li className="flex justify-between pb-2 border-b border-dashed">
              <div className="w-10 h-10 mr-3 overflow-hidden text-sm bg-gray-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Annette Watson profile picture"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-black">
                  My Crown & Bridge
                </span>{' '}
                <br />
                <span className="ml-auto text-sm">
                  Location of Dummy,Address
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold text-black">Date</span>{' '}
                <br />
                <span className="ml-auto text-sm">26/05/2023</span>
              </div>
            </li>
            <li className="flex justify-between pb-2 border-b border-dashed">
              <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Annette Watson profile picture"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-black">
                  My Crown & Bridge
                </span>{' '}
                <br />
                <span className="ml-auto text-sm">
                  Location of Dummy,Address
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold text-black">Date</span>{' '}
                <br />
                <span className="ml-auto text-sm">26/05/2023</span>
              </div>
            </li>
            <li className="flex justify-between pb-2 border-b border-dashed">
              <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Annette Watson profile picture"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-black">
                  My Crown & Bridge
                </span>{' '}
                <br />
                <span className="ml-auto text-sm">
                  Location of Dummy,Address
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold text-black">Date</span>{' '}
                <br />
                <span className="ml-auto text-sm">26/05/2023</span>
              </div>
            </li>
            <li className="flex justify-between pb-2 border-b border-dashed">
              <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Annette Watson profile picture"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-black">
                  My Crown & Bridge
                </span>{' '}
                <br />
                <span className="ml-auto text-sm">
                  Location of Dummy,Address
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold text-black">Date</span>{' '}
                <br />
                <span className="ml-auto text-sm">26/05/2023</span>
              </div>
            </li>
            <li className="flex justify-between pb-2 border-b border-dashed">
              <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Annette Watson profile picture"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-black">
                  My Crown & Bridge
                </span>{' '}
                <br />
                <span className="ml-auto text-sm">
                  Location of Dummy,Address
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold text-black">Date</span>{' '}
                <br />
                <span className="ml-auto text-sm">26/05/2023</span>
              </div>
            </li>
            <li className="flex justify-between pb-2 border-b border-dashed">
              <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  alt="Annette Watson profile picture"
                />
              </div>
              <div>
                <span className="text-sm font-semibold text-black">
                  My Crown & Bridge
                </span>{' '}
                <br />
                <span className="ml-auto text-sm">
                  Location of Dummy,Address
                </span>
              </div>
              <div>
                <span className="text-sm font-semibold text-black">Date</span>{' '}
                <br />
                <span className="ml-auto text-sm">26/05/2023</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
