import PropTypes from 'prop-types';
const Card03 = ({ treatmentPic, name, bgColor, textColor }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-10 text-blue-500 ${bgColor} rounded-lg shadow-md`}
    >
      <div>
        <img src={treatmentPic} alt="" className="w-12/12" />
      </div>
      <div>
        <span className={`block text-xs text-center ${textColor}`}>{name}</span>
      </div>
    </div>
  );
};
Card03.propTypes = {
  treatmentPic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  // other prop validations
};
export default Card03;
