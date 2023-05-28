import CustomTable from '../../Components/CustomTab/CustomTable';
import DashboardHeader from '../../Components/DashboardHeader/DashboardHeader';
import OrdersOverview from '../../Components/OrdersOverview/OrdersOverview';
import QuickOrder from '../../Components/QuickOrders/QuickOrder';
import StaticsChart from '../../Components/StaticsChart/StaticsChart';

const Dashboard = () => {
  return (
    <div>
      <div className="h-screen p-10 text-gray-800 xl:overflow-hidden ">
        <div className="">
          <DashboardHeader /> {/* -----------------> dashboard  Header*/}
          <main className="space-y-6 sm:p-10">
            <div className="flex flex-col gap-4 md:flex-row">
              <section className=" md:w-8/12">
                {<OrdersOverview />} {/*---------------------> Orders Dash */}
                {<StaticsChart />}{' '}
                {/*-----------------------> Statics chart  */}
              </section>
              <section className="bg-white rounded-lg md:w-4/12">
                <QuickOrder /> {/* -----------------> quick order section  */}
                <CustomTable /> {/* ------------------>/* Order history  */}
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
