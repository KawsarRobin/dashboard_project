import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SuccessfulPhoto from '../../assets/Images/successful.png';
const Successful = (props) => {
  //Handle click
  const handleClick = () => {
    props.handleTwoFunc();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 lg:justify-end">
      <div className="w-screen h-screen transition-transform duration-100 ease-in-out transform bg-white sm:w-3/12 du">
        <div className="flex flex-col items-center p-10 space-y-4 md:mt-72 sm:mt-40">
          <div>
            <img src={SuccessfulPhoto} alt="" />
          </div>
          <div>
            <div className="flex flex-col items-center justify-center ">
              <span className="block text-2xl font-bold">Password Created</span>
              <span className="block text-lg text-gray-500">
                Your password has been created successfully
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-8 md:mt-40 sm:mt-8">
          <Link>
            <button
              onClick={handleClick}
              type="submit"
              className="px-10 py-2 m-4 text-lg font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-700"
            >
              Okay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Successful.propTypes = {
  handleTwoFunc: PropTypes.func.isRequired,
};
export default Successful;
