import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Management from "./pages/management";
import AuthenticationPage from "./pages";
import LoadingPage from "./components/loading-page";
import SuccessfulOTP from "./pages/auth-page/SucessfulOTP";
import VerficationOTP from "./pages/auth-page/OTPVerification";
import UserRolePage from "./pages/user-role";
// Legit Screens


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/management" element={<Management />} />
        {/* Optional: Default route */}
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/loading-page" element={<LoadingPage />} />
        <Route path="/successful-otp" element={<SuccessfulOTP />} />
        <Route path="/verification-otp" element={<VerficationOTP />} />

        {/* screens */}
        <Route path="/dashboard" element={<UserRolePage /> } />

    
      </Routes>
    </Router>
  );
};

export default App;
