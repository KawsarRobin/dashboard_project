import { createRoot } from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AddressDetails from './Components/profile/AddressDetails.jsx';
import ChangePass from './Components/profile/ChangePass/ChangePass.jsx';
import PersonalInfo from './Components/profile/PersonalInfo.jsx';
import Profile from './Components/profile/Profile.jsx';
import ProfileInfo from './Components/profile/ProfileInfo.jsx';
import Dashboard from './PageLayouts/Dashboard/Dashboard.jsx';
import Home from './PageLayouts/Home/Home.jsx';
import MainPage from './PageLayouts/MainPage/MainPage.jsx';

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="navbar" element={<MainPage />}>
        <Route path="profile" element={<Profile />}>
          <Route path="changePassword" element={<ChangePass />} />
          <Route path="profileInfo" element={<ProfileInfo />}>
            <Route path="personalInfo" element={<PersonalInfo />} />
            <Route path="addressDetails" element={<AddressDetails />} />
          </Route>
        </Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render();
function App() {
  return (
    <div className=" App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
