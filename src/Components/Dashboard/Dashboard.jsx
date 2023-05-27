import QuickOrder from './../../Components/QuickOrders/QuickOrder';
import DashHeader from './DashHeader';
import DashSearch from './DashSearch';
import OrderHistory from './OrderHistory/OrderHistory';
import OrdersDash from './OrdersDash/OrdersDash';
import StaticsChart from './StaticsChart';

const Dashboard = () => {
  return (
    <div>
      <div className="flex-grow text-gray-800">
        <DashHeader /> {/* -----------------> dashboard  Header*/}
        <main className="p-6 space-y-6 sm:p-10">
          <DashSearch /> {/* -----------------> Search Bar for dashboard */}
          <div className="md:flex ">
            <section className="mr-4 md:w-9/12">
              {<OrdersDash />} {/*---------------------> Orders Dash */}
              {<StaticsChart />} {/*-----------------------> Statics chart  */}
            </section>
            <section className="bg-white rounded-lg md:w-3/12">
              <QuickOrder /> {/* -----------------> quick order section  */}
              <OrderHistory /> {/* ------------------>/* Order history  */}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
