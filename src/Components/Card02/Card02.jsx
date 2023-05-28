import PropTypes from 'prop-types';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const Card02 = ({ data }) => {
  const { title, number, progress, vs, Img } = data;

  const progressResult = parseFloat(progress.match(/-?\d+\.?\d*/)[0]);
  const colorClass = progressResult > 0 ? 'text-green-500' : 'text-red-500';

  const gradientStyle = {
    background:
      'linear-gradient(143.48deg, rgba(101, 109, 249, 0.123856) 50.29%, rgba(238, 99, 144, 0.151832) 103.08%)',
  };
  return (
    <>
      <div style={gradientStyle} className="px-8 py-6 mb-4 mr-4 rounded-lg ">
        <div className="flex justify-between flex-shrink-0 gap-2 py-2 rounded-full ">
          <span className="block text-xl text-gray-500 text-bold">
            {' '}
            {title}
          </span>
          <span className="block text-xl text-gray-500 text-bold">
            <img src={Img} alt="" />
          </span>
        </div>{' '}
        <div>
          <span className="block py-2 text-2xl font-bold">{number}</span>
        </div>{' '}
        <div className="flex justify-between py-2">
          <span
            className={`${colorClass}  text-sm font-bold flex space-x-1 items-center`}
          >
            <span>
              {progressResult > 0 ? (
                <AiOutlineArrowUp />
              ) : (
                <AiOutlineArrowDown />
              )}{' '}
            </span>
            <span> {progress}</span>
          </span>
          <span className="block text-sm text-gray-500 ">Vs {vs}</span>
        </div>
      </div>
    </>
  );
};
Card02.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card02;
