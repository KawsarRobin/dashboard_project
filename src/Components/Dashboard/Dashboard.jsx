import { AiOutlineHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FaTooth } from 'react-icons/fa';
import { SlBookOpen } from 'react-icons/sl';

const Dashboard = () => {
  const gradientStyle = {
    background:
      'linear-gradient(143.48deg, rgba(101, 109, 249, 0.123856) 50.29%, rgba(238, 99, 144, 0.151832) 103.08%)',
  };
  const gradientStyle2 = {
    background: 'linear-gradient(313.17deg, #E971B0 -44.06%, #8389F9 66.46%)',
  };
  return (
    <div>
      <div className="flex-grow text-gray-800">
        <header className="flex items-start h-20 py-6 sm:px-10">
          <div>
            <span>
              <AiOutlineHome />
            </span>
            <h1 className="relative w-full font-semibold text-Xl sm:-ml-2">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center flex-shrink-0 ml-auto">
            <div className="pl-3 ml-3 space-x-1 border-l">
              {/* Notification button */}
              <button className="px-3 py-1 text-green-500 bg-white rounded-lg">
                <span className="text-lg font-semibold">✓CH00001</span>
              </button>
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
        <main className="p-6 space-y-6 sm:p-10">
          <div className="flex flex-col justify-between ">
            <div className="flex justify-start space-y-6 md:space-y-0 md:flex-row">
              <div>
                <h1 className="pr-4 mb-2 text-4xl font-semibold">Dashboard</h1>
              </div>
              <div className="w-8/12">
                <input
                  type="text"
                  role="search"
                  placeholder="Search by Orders Name..."
                  className="w-full py-2 pl-10 pr-4 placeholder-gray-400 border-4 border-transparent rounded-lg focus:bg-gray-50"
                />
              </div>
            </div>
          </div>

          <div className="flex h-screen">
            <section className="w-9/12 mr-4">
              {/* 1st layer from left  */}
              <div className="flex">
                {/* single */}
                <div className="w-9/12 mb-4 mr-4">
                  <div
                    style={gradientStyle2}
                    className="flex items-center px-8 py-6 mb-4 mr-4 text-white rounded-lg "
                  >
                    {/* order created */}
                    <div className="rounded-lg ">
                      <div className="flex justify-between flex-shrink-0 gap-4 py-2 rounded-full ">
                        <span className="block text-xl text-bold">
                          {' '}
                          Orders In Progress
                        </span>
                        <span className="block text-xl text-bold">
                          <SlBookOpen />
                        </span>
                      </div>{' '}
                      <div>
                        <span className="block py-2 text-2xl font-bold">
                          434
                        </span>
                      </div>{' '}
                      <div className="flex justify-between py-2">
                        <span className="block text-sm text-bold">
                          {' '}
                          -08.02%
                        </span>
                        <span className="block text-sm text-bold">
                          Vs Previous Month
                        </span>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                {/* single card  */}
                <div
                  style={gradientStyle}
                  className="px-6 py-6 mb-6 rounded-lg"
                >
                  <div className="flex justify-between flex-shrink-0 py-2 rounded-full ">
                    <span className="block text-xl text-gray-500 text-bold">
                      {' '}
                      Orders In Progress
                    </span>
                    <span className="block text-xl text-gray-500 text-bold">
                      <SlBookOpen />
                    </span>
                  </div>{' '}
                  <div>
                    <span className="block py-2 text-2xl font-bold">434</span>
                  </div>{' '}
                  <div className="flex justify-between py-2">
                    <span className="block text-sm text-green-500 text-bold">
                      {' '}
                      -08.02%
                    </span>
                    <span className="block text-sm text-gray-500 text-bold">
                      Vs Previous Month
                    </span>
                  </div>
                </div>
              </div>
              {/* 2nd layer from the left  */}
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {/* single card */}
                <div>
                  <div
                    style={gradientStyle}
                    className="px-8 py-6 mb-4 mr-4 rounded-lg "
                  >
                    <div className="flex justify-between flex-shrink-0 gap-2 py-2 rounded-full ">
                      <span className="block text-xl text-gray-500 text-bold">
                        {' '}
                        Order Completed
                      </span>
                      <span className="block text-xl text-gray-500 text-bold">
                        <SlBookOpen />
                      </span>
                    </div>{' '}
                    <div>
                      <span className="block py-2 text-2xl font-bold">221</span>
                    </div>{' '}
                    <div className="flex justify-between py-2">
                      <span className="block text-sm text-red-500 text-bold">
                        {' '}
                        -08.02%
                      </span>
                      <span className="block text-sm text-gray-500 text-bold">
                        Vs Previous Month
                      </span>
                    </div>
                  </div>
                </div>
                {/* single card */}
                <div>
                  <div
                    style={gradientStyle}
                    className="px-8 py-6 mb-4 mr-4 rounded-lg "
                  >
                    <div className="flex justify-between flex-shrink-0 gap-2 py-2 rounded-full ">
                      <span className="block text-xl text-gray-500 text-bold">
                        {' '}
                        Order In Dispute
                      </span>
                      <span className="block text-xl text-gray-500 text-bold">
                        <SlBookOpen />
                      </span>
                    </div>{' '}
                    <div>
                      <span className="block py-2 text-2xl font-bold">89</span>
                    </div>{' '}
                    <div className="flex justify-between py-2">
                      <span className="block text-sm text-red-500 text-bold">
                        {' '}
                        -11.03%
                      </span>
                      <span className="block text-sm text-gray-500 text-bold">
                        Vs Previous Month
                      </span>
                    </div>
                  </div>
                </div>
                {/* single card */}
                <div>
                  <div
                    style={gradientStyle}
                    className="px-8 py-6 mb-4 mr-4 rounded-lg "
                  >
                    <div className="flex justify-between flex-shrink-0 gap-2 py-2 rounded-full ">
                      <span className="block text-xl text-gray-500 text-bold">
                        {' '}
                        Worth of Orders
                      </span>
                      <span className="block text-xl text-gray-500 text-bold">
                        <SlBookOpen />
                      </span>
                    </div>{' '}
                    <div>
                      <span className="block py-2 text-2xl font-bold">
                        $3090
                      </span>
                    </div>{' '}
                    <div className="flex justify-between py-2">
                      <span className="block text-sm text-green-500 text-bold">
                        {' '}
                        16.02%
                      </span>
                      <span className="block text-sm text-gray-500 text-bold">
                        Vs Previous Month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* chart  */}
              <div>
                <div className="flex flex-col bg-white rounded-lg shadow md:col-span-2 md:row-span-2">
                  <div className="px-6 py-5 font-semibold border-b border-gray-100">
                    Your insights will appear here soon.
                  </div>
                  <div className="flex-grow p-4">
                    <div className="flex items-center justify-center h-full px-4 py-16 text-3xl font-semibold text-gray-400 bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                      Chart
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* quick order section  */}
            <section className="w-3/12 bg-white rounded-lg">
              <div className="flex justify-between p-4">
                <span className="block text-xl font-bold text-black">
                  {' '}
                  Order Quickly
                </span>
                <span className="inline-flex text-sm text-gray-500">
                  <BiSearch className="text-2xl" />
                  Find Service
                </span>
              </div>
              <div className="grid gap-4 m-2 md:grid-cols-2 xl:grid-cols-3">
                {/* single */}
                <div>
                  <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
                      <span className="text-5xl ">
                        <FaTooth />
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">
                        Orthodontic Service
                      </span>
                    </div>
                  </div>
                </div>
                {/* single */}
                <div>
                  <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
                      <span className="text-5xl ">
                        <FaTooth />
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">
                        Orthodontic Service
                      </span>
                    </div>
                  </div>
                </div>
                {/* single */}
                <div>
                  <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
                      <span className="text-5xl ">
                        <FaTooth />
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">
                        Orthodontic Service
                      </span>
                    </div>
                  </div>
                </div>
                {/* single */}
                <div>
                  <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
                      <span className="text-5xl ">
                        <FaTooth />
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">
                        Orthodontic Service
                      </span>
                    </div>
                  </div>
                </div>
                {/* single */}
                <div>
                  <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
                      <span className="text-5xl ">
                        <FaTooth />
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">
                        Orthodontic Service
                      </span>
                    </div>
                  </div>
                </div>
                {/* single */}
                <div>
                  <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
                      <span className="text-5xl ">
                        <FaTooth />
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">
                        Orthodontic Service
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Order history  */}
              <div className="h-screen row-span-3 bg-white rounded-lg shadow">
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
                <div className="overflow-y-auto">
                  <ul className="p-6 space-y-6">
                    <li className="flex justify-between">
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
                        <span className="ml-auto ">
                          Location of Dummy,Address
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-black">
                          Date
                        </span>{' '}
                        <br />
                        <span className="ml-auto ">26/05/2023</span>
                      </div>
                    </li>
                    <li className="flex justify-between">
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
                        <span className="ml-auto ">
                          Location of Dummy,Address
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-black">
                          Date
                        </span>{' '}
                        <br />
                        <span className="ml-auto ">26/05/2023</span>
                      </div>
                    </li>
                    <li className="flex justify-between">
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
                        <span className="ml-auto ">
                          Location of Dummy,Address
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-black">
                          Date
                        </span>{' '}
                        <br />
                        <span className="ml-auto ">26/05/2023</span>
                      </div>
                    </li>
                    <li className="flex justify-between">
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
                        <span className="ml-auto ">
                          Location of Dummy,Address
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-black">
                          Date
                        </span>{' '}
                        <br />
                        <span className="ml-auto ">26/05/2023</span>
                      </div>
                    </li>
                    <li className="flex justify-between">
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
                        <span className="ml-auto ">
                          Location of Dummy,Address
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-black">
                          Date
                        </span>{' '}
                        <br />
                        <span className="ml-auto ">26/05/2023</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
