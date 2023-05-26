const DashSearch = () => {
  return (
    <>
      <div className="flex flex-col justify-between ">
        <div className="flex justify-start space-y-6 md:space-y-0 md:flex-row">
          <div>
            <h1 className="pr-4 mb-2 text-4xl font-semibold">Dashboard</h1>
          </div>
          <div className="w-8/12">
            <span></span>
            <input
              type="text"
              role="search"
              readOnly
              placeholder={`Search by Orders Name...`}
              className="w-full py-2 pl-10 pr-4 placeholder-gray-400 border-4 border-transparent rounded-lg focus:bg-gray-50"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashSearch;
