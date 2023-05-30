import PropTypes from 'prop-types';
const Card04 = ({ singleOrder, textSize, hoverColor, bgColor }) => {
  const { location, title, Img, date } = singleOrder;
  return (
    <>
      <li
        className={`flex justify-between p-2  border-b border-dashed rounded-md ${textSize} ${hoverColor} ${bgColor}`}
      >
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <img src={Img} />
        </div>
        <div>
          <span className="font-semibold text-black ">{title}</span> <br />
          <span className="ml-auto ">{location}</span>
        </div>
        <div>
          <span className="font-semibold text-black ">Date</span> <br />
          <span className="ml-auto">{date}</span>
        </div>
      </li>
    </>
  );
};
Card04.propTypes = {
  singleOrder: PropTypes.object.isRequired,
  textSize: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};
export default Card04;
