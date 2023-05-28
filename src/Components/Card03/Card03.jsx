import PropTypes from 'prop-types';
const Card03 = ({ treatmentPic, name }) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-blue-500 bg-white rounded-lg shadow-xl">
      <div>
        <img src={treatmentPic} alt="" className="w-12/12" />
      </div>
      <div>
        <span className="block text-xs text-center text-gray-500">{name}</span>
      </div>
    </div>
  );
};
Card03.propTypes = {
  treatmentPic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // other prop validations
};
export default Card03;
