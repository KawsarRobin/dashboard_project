import ProfileInnerHeader from '../../Components/ProfileInnerHeader/ProfileInnerHeader.jsx';
import ProfileSection from '../../Components/ProfileSection/ProfileSection.jsx';

const Profile = () => {
  return (
    <div className="text-gray-800 ">
      <ProfileInnerHeader
        pathTitle={'Profile'}
        innerHeadline={'Profile Info'}
      />
      <main className="h-screen space-y-6 bg-white rounded-lg md:p-6 md:mx-10 sm:p-10">
        {<ProfileSection />}
      </main>
    </div>
  );
};

export default Profile;
