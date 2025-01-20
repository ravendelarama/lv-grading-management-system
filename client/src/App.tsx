import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Management from './pages/management';
import TOR from './pages/tor';

import AuthenticationPage from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/management" element={<Management />} />
        <Route path="/tor" element={<TOR />} />
        {/* Optional: Default route */}
        <Route path="/" element={<AuthenticationPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
