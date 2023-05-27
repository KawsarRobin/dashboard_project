import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/navbar/dashboard');
  }, [navigate]);
  return (
    <div className="w-full h-screen">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
