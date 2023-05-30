import { useEffect, useState } from 'react';
import Card03 from '../Card03/Card03';

const CustomCarousel = () => {
  const [quickOrderData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/QuickOrderData.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="grid gap-6 m-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {quickOrderData.map((item) => (
          <div key={item.Id}>
            <Card03
              treatmentPic={item.Image}
              name={item.Name}
              bgColor={'bg-white'}
              textColor={'text-gray-500'}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomCarousel;
