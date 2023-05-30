import PropTypes from 'prop-types';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const Card01 = ({ data, gradientStyle }) => {
  const { title, number, progress, vs, Img, stateImg } = data;
  const progressResult = parseFloat(progress.match(/-?\d+\.?\d*/)[0]);

  return (
    <>
      <div
        style={gradientStyle}
        className="flex items-center justify-between px-8 py-6 mr-4 text-white rounded-lg "
      >
        {/* order created */}
        <div className="rounded-lg ">
          <div className="flex justify-between flex-shrink-0 gap-4 py-2 rounded-full ">
            <span className="block text-xl text-bold"> {title}</span>
            <span className="block text-xl text-bold">
              <img src={Img} alt="" />
            </span>
          </div>{' '}
          <div>
            <span className="block py-2 text-2xl font-bold">{number}</span>
          </div>{' '}
          <div className="flex justify-between py-2">
            <span className={`text-sm font-bold flex space-x-1 items-center`}>
              <span>
                {progressResult > 0 ? (
                  <AiOutlineArrowUp />
                ) : (
                  <AiOutlineArrowDown />
                )}{' '}
              </span>
              <span> {progress}</span>
            </span>
            <span className="block text-sm text-bold">Vs {vs}</span>
          </div>
        </div>
        <div>
          <img src={stateImg} alt="" />
        </div>
      </div>
    </>
  );
};
Card01.propTypes = {
  data: PropTypes.object.isRequired,
  gradientStyle: PropTypes.object.isRequired,
};
export default Card01;
