import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Automation from './pages/automation';
import Management from './pages/management';
import Tor from './pages/tor';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/automation">Automation</Link></li>
          <li><Link to="/management">Management</Link></li>
          <li><Link to="/tor">TOR</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/automation" element={<Automation />} />
        <Route path="/management" element={<Management />} />
        <Route path="/tor" element={<Tor/>} />
        {/* Optional: Default route */}
        <Route path="/" element={<h1>Welcome to the Grading Management System</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
