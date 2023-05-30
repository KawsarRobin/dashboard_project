import PropTypes from 'prop-types';
import { useState } from 'react';
const EditPassFrom = (props) => {
  const [formData, setFormData] = useState({
    NewPassword: '',
    ConfirmPassword: '',
  });

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

  const handleCancel = () => {
    // Add logic to handle form cancellation
  };

  //Handle click
  const handleClick = () => {
    props.handlePageChange(2);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md px-6 text-lg text-gray-800 bg-white rounded-lg">
        <form className="flex flex-col justify-between" onSubmit={handleSubmit}>
          <div>
            <div className="mb-6 text-lg text-gray-800">
              <label htmlFor="firstName" className="block mb-2">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter your new Password Here"
                readOnly
                value={formData.NewPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-32">
              <label
                htmlFor="middleName"
                className="block mb-2 text-lg text-gray-800"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your Password Here"
                readOnly
                value={formData.ConfirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-end pt-8 border-t-2 md:mt-72 sm:mt-8">
            <button
              onClick={handleCancel}
              type="button"
              className="px-10 py-2 mr-2 font-medium border rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleClick}
              className="px-10 py-2 mr-2 font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-700"
            >
              Save Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
EditPassFrom.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
};

export default EditPassFrom;
