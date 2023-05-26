import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const StaticsChart = () => {
  const data = [
    {
      name: 'October',

      pv: 0,
      amt: 2400,
    },
    {
      name: 'November',

      pv: 500,
      amt: 2210,
    },
    {
      name: 'December',

      pv: 1200,
      amt: 2290,
    },
    {
      name: 'January',

      pv: 9088,
      amt: 2000,
    },
    {
      name: 'February',

      pv: 4700,
      amt: 2181,
    },
    {
      name: 'March',

      pv: 2500,
      amt: 2500,
    },
  ];

  return (
    <>
      <div className="flex flex-col bg-white rounded-lg shadow md:col-span-2 md:row-span-2">
        <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
          <div>
            <span className="text-2xl font-bold">Order Statics</span> <br />
            <span className="font-bold ">New</span>
          </div>
          <div>
            <button className="px-3 py-2 mx-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-600">
              Monthly
            </button>
            <button className="px-3 py-2 mx-2 text-sm font-bold bg-gray-100 border rounded">
              Yearly
            </button>
          </div>
        </div>
        <div className="flex flex-grow w-full p-4">
          <AreaChart
            width={730}
            height={300}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7AA1F7" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#7AA1F7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />

            <Tooltip />

            <Area
              className="font-bold"
              type="monotone"
              dataKey="pv"
              stroke="#7AA1F7"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>
    </>
  );
};

export default StaticsChart;
