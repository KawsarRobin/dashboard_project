import { AiOutlineMail } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';
import ChangePassCanvas from './ChangePassCanvas/ChangePassCanvas';

const PasswordSection = () => {
  return (
    <div>
      <section className="grid gap-6 bg-white md:grid-cols-2 xl:grid-cols-1">
        {/* email part  */}
        <div className="px-8 pt-8 pb-3 border-b-2">
          <div>
            <div className="flex items-start pb-2 ">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mr-6 text-blue-600 bg-blue-100 rounded-full">
                <AiOutlineMail />
              </div>
              <div>
                <span className="block text-xl font-bold">Email Address</span>
                <span className="block text-sm text-gray-500">
                  johndoe007@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* password part  */}
        <div className="flex flex-wrap items-center justify-between px-8 py-4 mb-6 border-b-2 ">
          <div className="flex items-start w-full pb-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mr-6 text-purple-600 bg-purple-100 rounded-full">
              <VscKey />
            </div>
            <div>
              <span className="block text-xl font-bold">Password</span>
              <span className="block text-sm text-gray-500">
                - - - - - - - - - -
              </span>
            </div>
          </div>

          <div className="flex items-start w-full pb-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ">
            <div>
              <span className="block text-xl font-bold">Last Updated</span>
              <span className="block text-sm text-gray-500">28/09/2021</span>
            </div>
          </div>
          <div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <ChangePassCanvas />{' '}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PasswordSection;
