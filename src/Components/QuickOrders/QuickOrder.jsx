import CustomCarousel from '../CustomCarousel/CustomCarousel';

const QuickOrder = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between p-4">
        <span className="block text-xl font-bold text-black">
          Order Quickly
        </span>
        <span className="flex text-xs text-gray-500 ">
          <img
            className="max-w-full"
            src="https://i.ibb.co/7Ywd6KH/search-Img.png"
            alt=""
          />
          Find Service
        </span>
      </div>
      <div>
        <CustomCarousel />
      </div>
    </div>
  );
};

export default QuickOrder;
