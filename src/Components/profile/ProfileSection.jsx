const Section = () => {
  return (
    <div>
      <section className="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
        <div className="flex justify-between pt-8 px-8 pb-3 bg-white shadow rounded-lg">
          <div>
            <div className="flex items-start ">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                <img
                  src="../../assets/Screenshot 2023-03-30 at 1.56 1.png"
                  alt=""
                />
              </div>
              <div>
                <span className="block text-xl font-bold">John doe</span>
                <span className="block text-sm text-gray-500">
                  johndoe007@gmail.com
                </span>
              </div>
            </div>
            <div className="flex justify-start pt-8 gap-6 text-sm text-gray-500">
              <div>
                <p>Personal Information</p>
              </div>
              <div>
                <p>Address Details</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <button className="rounded-rounded bg-orange-500 p-2 text-white text-xl">
                Edit Profile
              </button>
            </div>
            <div>
              <span className="block text-xl font-bold"></span>
              <span className="block text-xs text-gray-500">
                last updated on dec 09, 2021
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6"></section>
    </div>
  );
};

export default Section;
