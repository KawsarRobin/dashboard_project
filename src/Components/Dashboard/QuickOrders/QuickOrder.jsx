import { BiSearch } from 'react-icons/bi';

import teeth1 from '../../../assets/teeth/teeth1.png';
import teeth2 from '../../../assets/teeth/teeth2.png';
import teeth3 from '../../../assets/teeth/teeth3.png';
import teeth4 from '../../../assets/teeth/teeth4.png';
import teeth6 from '../../../assets/teeth/teeth6.png';

const QuickOrder = () => {
  return (
    <>
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
              <img src={teeth1} alt="" />
            </div>
            <div>
              <span className="block text-sm text-gray-500">
                Orthodontic Service plant
              </span>
            </div>
          </div>
        </div>
        {/* single */}
        <div>
          <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
              <img src={teeth2} alt="" />
            </div>
            <div>
              <span className="block text-sm text-gray-500">
                Surgical Guide Fabrication
              </span>
            </div>
          </div>
        </div>
        {/* single */}
        <div>
          <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
              <img src={teeth3} alt="" />
            </div>
            <div>
              <span className="block text-sm text-gray-500">
                Immediate Provisional Restoration
              </span>
            </div>
          </div>
        </div>
        {/* single */}
        <div>
          <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
              <img src={teeth4} alt="" />
              ``
            </div>
            <div>
              <span className="block text-sm text-gray-500">
                Crown & Bridge Crown
              </span>
            </div>
          </div>
        </div>
        {/* single */}
        <div>
          <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
              <img src={teeth6} alt="" />
            </div>
            <div>
              <span className="block text-sm text-gray-500">
                Implant Treatment Planning
              </span>
            </div>
          </div>
        </div>
        {/* single */}
        <div>
          <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 mr-4">
              <img src={teeth6} alt="" />
            </div>
            <div>
              <span className="block text-sm text-gray-500">
                Implant Treatment Planning
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickOrder;
