import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Automation from './pages/automation';
import Management from './pages/management';
import TOR from './pages/tor';
import LandingPage from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/automation" element={<Automation />} />
        <Route path="/management" element={<Management />} />
        <Route path="/tor" element={<TOR />} />
        {/* Optional: Default route */}
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
