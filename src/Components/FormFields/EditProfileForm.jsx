import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EditProfileForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    companyName: '',
    registrationNumber: '',
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

  /* const handleCancel = () => {
     Add logic to handle form cancellation
  }; */

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-6 text-lg text-gray-800 bg-white rounded-lg">
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-6 text-lg text-gray-800">
            <label htmlFor="firstName" className="block mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John"
              readOnly
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="middleName"
              className="block mb-2 text-lg text-gray-800"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              placeholder="---"
              readOnly
              value={formData.middleName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6 text-lg text-gray-800">
            <label
              htmlFor="lastName"
              className="block mb-2 font-medium text-gray-800"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              readOnly
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6 text-lg text-gray-800">
            <label
              htmlFor="companyName"
              className="block mb-2 font-medium text-gray-800"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="H&A Solutions"
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
              Registration Number
            </label>
            <input
              type="text"
              id="registrationNumber"
              name="registrationNumber"
              placeholder="H&A Solutions"
              readOnly
              value={formData.registrationNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-end pt-6 border-t-2 md:mt-24 sm:mt-8">
            <Link to="/navbar/profile/profileInfo/personalInfo">
              <button
                type="button"
                onClick={handleClick}
                className="px-10 py-2 mr-2 font-medium border rounded-lg"
              >
                Cancel
              </button>
            </Link>
            <Link to="/navbar/profile/profileInfo/personalInfo">
              <button
                onClick={handleClick}
                type="submit"
                className="px-10 py-2 mr-2 font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-700"
              >
                Save
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
EditProfileForm.propTypes = {
  closeOffcanvas: PropTypes.func.isRequired,
};

export default EditProfileForm;
