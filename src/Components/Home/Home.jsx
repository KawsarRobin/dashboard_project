import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  );
};

export default Home;
