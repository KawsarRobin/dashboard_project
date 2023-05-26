import { SlBookOpen } from 'react-icons/sl';
import stateImg from '../.../../../../assets/statisticsImg.png';
const OrdersDash = () => {
  // Styles for gradient
  const gradientStyle = {
    background:
      'linear-gradient(143.48deg, rgba(101, 109, 249, 0.123856) 50.29%, rgba(238, 99, 144, 0.151832) 103.08%)',
  };
  const gradientStyle2 = {
    background: 'linear-gradient(313.17deg, #E971B0 -44.06%, #8389F9 66.46%)',
  };
  return (
    <>
      {/* 1st Layer  from left */}
      <div className="flex">
        {/* single */}
        <div className="w-9/12 mb-4 mr-4">
          <div
            style={gradientStyle2}
            className="flex items-center justify-between px-8 py-6 mb-4 mr-4 text-white rounded-lg "
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
                <span className="block py-2 text-2xl font-bold">434</span>
              </div>{' '}
              <div className="flex justify-between py-2">
                <span className="block text-sm text-bold"> -08.02%</span>
                <span className="block text-sm text-bold">
                  Vs Previous Month
                </span>
              </div>
            </div>
            <div>
              <img src={stateImg} alt="" />
            </div>
          </div>
        </div>
        {/* single card  */}
        <div style={gradientStyle} className="px-6 py-6 mb-6 rounded-lg">
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
              <span className="block py-2 text-2xl font-bold">$3090</span>
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
    </>
  );
};

export default OrdersDash;
