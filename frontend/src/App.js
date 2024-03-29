import Navbar from './Component/Navbar';
import DisplaySecrets from './Component/DisplaySecrets';
import Login from './Component/Login';
import Signup from './Component/Signup';
import {
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import NotFound from './Component/NotFound';
import CreateSecret from './Component/CreateSecret';
import OtherSecret from './Component/OtherSecret';
import ForgotPassword from './Component/forgotPassword';
import ResetPassword from './Component/ResetPassword';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<DisplaySecrets />} />
        <Route path="/user/createSecret" element={<CreateSecret />} />
        <Route path="/otherSecret" element={<OtherSecret />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
        <Route path="/user" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
