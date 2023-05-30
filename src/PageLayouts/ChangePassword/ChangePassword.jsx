import PasswordSection from '../../Components/PasswordSection/PasswordSection';
import ProfileInnerHeader from '../../Components/ProfileInnerHeader/ProfileInnerHeader';

const ChangePassword = () => {
  return (
    <div className="text-gray-800 ">
      <ProfileInnerHeader
        pathTitle="Change Password"
        innerHeadline="Change Password"
      />
      <main className="h-screen space-y-6 bg-white rounded-lg md:p-6 md:mx-10 sm:p-10">
        {<PasswordSection />}
      </main>
    </div>
  );
};

export default ChangePassword;
