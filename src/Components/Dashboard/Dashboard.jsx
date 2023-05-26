import DashHeader from './DashHeader';
import DashSearch from './DashSearch';
import OrderHistory from './OrderHistory/OrderHistory';
import OrdersDash from './OrdersDash/OrdersDash';
import QuickOrder from './QuickOrders/QuickOrder';
import StaticsChart from './StaticsChart';

const Dashboard = () => {
  return (
    <div>
      <div className="flex-grow text-gray-800">
        <DashHeader /> {/* -----------------> dashboard  Header*/}
        <main className="p-6 space-y-6 sm:p-10">
          <DashSearch /> {/* -----------------> Search Bar for dashboard */}
          <div className="flex h-screen">
            <section className="w-9/12 mr-4">
              {<OrdersDash />} {/*---------------------> Orders Dash */}
              {<StaticsChart />} {/*-----------------------> Statics chart  */}
            </section>
            <section className="w-3/12 bg-white rounded-lg">
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
