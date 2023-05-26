import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
