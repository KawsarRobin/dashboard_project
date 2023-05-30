import PropTypes from 'prop-types';
import { useState } from 'react';
import mapImg from '../../assets/Images/map.png';

const EditAddressForm = (props) => {
  const [formData, setFormData] = useState({
    Address: '',
    Country: '',
    PinCode: '',
  });

  const handleClick = () => {
    props.closeOffcanvas();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save the form data
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-6 text-lg text-gray-800 bg-white rounded-lg">
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-4 text-lg text-gray-800">
            <label htmlFor="firstName" className="block mb-2">
              Address
            </label>
            <input
              type="text"
              id="Address"
              name="Address"
              placeholder="Location Of Dummy, Address of...."
              readOnly
              value={formData.Address}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="Search"
              className="block mb-2 text-lg text-gray-800"
            ></label>
            <input
              type="text"
              id="Search"
              name="Search"
              placeholder="Search By Locality"
              readOnly
              value={formData.Address}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6 text-lg text-gray-800 ">
            <img src={mapImg} alt="" className="w-full " />
          </div>
          <div className="mb-6 text-lg text-gray-800">
            <label
              htmlFor="country"
              className="block mb-2 font-medium text-gray-800"
            >
              Company Name
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Newzealand"
              readOnly
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6 text-lg text-gray-800">
            <label
              htmlFor="registrationNumber"
              className="block mb-2 font-medium text-gray-800"
            >
              PinCode
            </label>
            <input
              type="text"
              id="pinCode"
              name="PinCode"
              placeholder="0110"
              readOnly
              value={formData.PinCode}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-end pt-6 border-t-2 md:mt-24 sm:mt-8">
            <button
              type="button"
              onClick={handleClick}
              className="px-10 py-2 mr-2 font-medium border rounded-lg"
            >
              CANCEL
            </button>
            <button
              type="submit"
              onClick={handleClick}
              className="px-10 py-2 mr-2 font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-700"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditAddressForm.propTypes = {
  closeOffcanvas: PropTypes.func.isRequired,
};

export default EditAddressForm;
