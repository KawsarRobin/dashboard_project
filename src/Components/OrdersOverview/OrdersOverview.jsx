import { useEffect, useState } from 'react';
import Card01 from '../Card01/Card01';
import Card02 from '../Card02/Card02';
const OrdersDash = () => {
  const [data, setData] = useState([]);

  // Fetching Data for Card 02
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Card2Data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const card1DataObject = {
    id: '01',
    title: 'Order Completed',
    number: '221',
    progress: '+16.02%',
    vs: 'Previous Month',
    Img: 'https://i.ibb.co/JC82str/order.png',
    stateImg: 'https://i.ibb.co/TYWYfLd/statistics-Img.png',
  };
  const card02DataObject = {
    id: '01',
    title: 'Order Completed',
    number: '221',
    progress: '+26.20%',
    vs: 'Previous Month',
    Img: 'https://i.ibb.co/JC82str/order.png',
  };
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row">
        {/* ------------------Card O1---------------  */}
        <div style={{ flex: '0 0 66%', minWidth: '0' }}>
          <Card01 data={card1DataObject} />
        </div>
        {/* ------------ Single Card02-------------- */}
        <div style={{ flex: '0 0 33%', minWidth: '0' }}>
          <Card02 data={card02DataObject} />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {/* single card */}
        {data.map((item) => (
          <div key={item.id}>
            <Card02 data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default OrdersDash;
