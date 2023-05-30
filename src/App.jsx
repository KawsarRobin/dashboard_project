import { createRoot } from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import AddressDetails from './Components/AddressDetails/AddressDetails.jsx';
import PersonalInfo from './Components/PersonalInfo.jsx/PersonalInfo.jsx';

import MultiLevelMenu from './Components/MultiLevelMenu/MultiLevelMenu.jsx';
import ChangePassword from './PageLayouts/ChangePassword/ChangePassword.jsx';
import Dashboard from './PageLayouts/Dashboard/Dashboard.jsx';
import Home from './PageLayouts/Home/Home.jsx';
import MainPage from './PageLayouts/MainPage/MainPage.jsx';
import Profile from './PageLayouts/Profile/Profile.jsx';

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="navbar" element={<MainPage />}>
        <Route path="profile" element={<MultiLevelMenu />}>
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="profileInfo" element={<Profile />}>
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
