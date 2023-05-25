import { createRoot } from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Nav.jsx';
import Profile from './Components/profile/Profile.jsx';
import ProfileInfo from './Components/profile/ProfileInfo.jsx';

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="navbar" element={<Navbar />}>
        <Route path="profile" element={<Profile />}>
          <Route path="profileInfo" element={<ProfileInfo />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render();
function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
