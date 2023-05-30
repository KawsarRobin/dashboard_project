import { CiFlag1, CiLocationOn } from 'react-icons/ci';
import { HiOutlineHashtag } from 'react-icons/hi';

const AddressDetails = () => {
  return (
    <>
      {/* single card */}
      <div>
        <div className="flex items-start px-8 py-6 mb-4 mr-4 border-b border-dashed ">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 text-2xl text-blue-400 rounded-full bg-blue-50">
            <span>
              <CiLocationOn />
            </span>
          </div>
          <div>
            <span className="block text-lg font-semibold">Address</span>
            <span className="block text-sm text-gray-500">
              Location Of Dummy, Address of.....
            </span>
          </div>
        </div>
      </div>
      {/* single card  */}
      <div>
        <div className="flex items-start px-8 py-6 mb-4 mr-4 border-b border-dashed ">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 text-2xl text-blue-400 rounded-full bg-blue-50">
            <span>
              <CiFlag1 />
            </span>
          </div>
          <div>
            <span className="block text-lg font-semibold">Country</span>
            <span className="block text-sm text-gray-500">Newzealand</span>
          </div>
        </div>
      </div>
      {/* single card  */}
      <div>
        <div className="flex items-start px-8 py-6 mb-4 mr-4 border-b border-dashed ">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 text-2xl text-blue-400 rounded-full bg-blue-50">
            <span>
              <HiOutlineHashtag />
            </span>
          </div>
          <div>
            <span className="block text-lg font-semibold">Pin Code</span>
            <span className="block text-sm text-gray-500">0110</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressDetails;
