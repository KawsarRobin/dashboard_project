import PropTypes from 'prop-types';
const Card04 = ({ singleOrder }) => {
  const { location, title, Img, date } = singleOrder;
  return (
    <>
      <li className="flex justify-between p-2 border-b border-dashed rounded-md hover:bg-gray-100">
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <img src={Img} />
        </div>
        <div>
          <span className="text-sm font-semibold text-black">{title}</span>{' '}
          <br />
          <span className="ml-auto text-sm">{location}</span>
        </div>
        <div>
          <span className="text-sm font-semibold text-black">Date</span> <br />
          <span className="ml-auto text-sm">{date}</span>
        </div>
      </li>
    </>
  );
};
Card04.propTypes = {
  singleOrder: PropTypes.object.isRequired,
};
export default Card04;
