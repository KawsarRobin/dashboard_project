import { useEffect, useState } from 'react';
import Card04 from '../Card04/Card04';

const OrderHistory = () => {
  const [OrderHistoryData, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/OrderHistoryData.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="row-span-3 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between px-6 py-5 mb-3 text-xl font-bold border-b border-gray-100">
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
        <div className="flex items-center py-2 justify-evenly ">
          <div>
            <span>
              <button className="px-2 py-1 ml-2 text-sm font-bold text-blue-500 rounded-sm bg-blue-50 ">
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
        <div className="overflow-y-auto h-80">
          <ul className="p-6 space-y-6">
            {OrderHistoryData.map((item) => (
              <div key={item.id}>
                <Card04 singleOrder={item} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
