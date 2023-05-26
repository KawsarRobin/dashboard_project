import { BsTelephone } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import { HiOutlineHashtag } from 'react-icons/hi';
import { IoIosContact } from 'react-icons/io';
const PersonalInfo = () => {
  return (
    <>
      {/* single card */}
      <div>
        <div className="flex items-start px-8 py-6 mb-4 mr-4 border-b border-dashed ">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 text-2xl text-blue-400 rounded-full bg-blue-50">
            <span>
              <IoIosContact />
            </span>
          </div>
          <div>
            <span className="block text-lg font-semibold">First Name</span>
            <span className="block text-sm text-gray-500">John</span>
          </div>
        </div>
      </div>
      {/* single card  */}
      <div>
        <div className="flex items-start px-8 py-6 mb-4 mr-4 border-b border-dashed ">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 text-2xl text-blue-400 rounded-full bg-blue-50">
            <span>
              <IoIosContact />
            </span>
          </div>
          <div>
            <span className="block text-lg font-semibold">Last Name</span>
            <span className="block text-sm text-gray-500">Doe</span>
          </div>
        </div>
      </div>
      {/* single card  */}
      <div>
        <div className="flex items-start px-8 py-6 mb-4 mr-4 border-b border-dashed ">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 text-2xl text-blue-400 rounded-full bg-blue-50">
            <span>
              <BsTelephone />
            </span>
          </div>
          <div>
            <span className="block text-lg font-semibold">Phone Number</span>
            <span className="block text-sm text-gray-500">
              +41 2233 432 221
            </span>
          </div>
        </div>
      </div>
      {/* single card  */}
      <div>
        <div className="flex items-start px-8 py-6 mb-4 mr-4 border-b border-dashed ">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 text-2xl text-blue-400 rounded-full bg-blue-50">
            <span>
              <FaRegNewspaper />
            </span>
          </div>
          <div>
            <span className="block text-lg font-semibold">Company Name</span>
            <span className="block text-sm text-gray-500">H&A Solutions</span>
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
            <span className="block text-lg font-semibold">
              Registration Number
            </span>
            <span className="block text-sm text-gray-500">#2899102</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
