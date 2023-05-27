import { createRoot } from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Home from './Components/Home/Home.jsx';
import Nav from './Components/Navbar/Nav.jsx';
import AddressDetails from './Components/profile/AddressDetails.jsx';
import ChangePass from './Components/profile/ChangePass/ChangePass.jsx';
import PersonalInfo from './Components/profile/PersonalInfo.jsx';
import Profile from './Components/profile/Profile.jsx';
import ProfileInfo from './Components/profile/ProfileInfo.jsx';

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="navbar" element={<Nav />}>
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
