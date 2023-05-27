import { BiSearch } from 'react-icons/bi';
import teeth1 from './../../assets/Images/teeth1.png';
import teeth2 from './../../assets/Images/teeth2.png';
import teeth3 from './../../assets/Images/teeth3.png';
import teeth4 from './../../assets/Images/teeth4.png';
import teeth6 from './../../assets/Images/teeth5.png';

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
      <div className="grid gap-4 m-2 sm:place-items-center md:place-items-baseline sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {/* single */}
        <div>
          <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
            <div className="flex-shrink-0 w-12 h-12 mr-4 overflow-hidden inline-">
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
            <div className="flex-shrink-0 w-16 mr-4 overflow-hidden inline-">
              <img src={teeth2} alt="" />
            </div>{' '}
            <div>
              <span className="text-sm text-gray-500 ">
                Surgical Guide Fabrication
              </span>
            </div>
          </div>
        </div>
        {/* single */}
        <div>
          <div className="p-8 text-blue-500 bg-white rounded-lg shadow ">
            <div className="flex-shrink-0 w-12 h-12 mr-4 overflow-hidden inline-">
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
            <div className="flex-shrink-0 w-12 h-12 mr-4 overflow-hidden inline-">
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
            <div className="flex-shrink-0 w-12 h-12 mr-4 overflow-hidden inline-">
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
            <div className="flex-shrink-0 w-12 h-12 mr-4 overflow-hidden inline-">
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
