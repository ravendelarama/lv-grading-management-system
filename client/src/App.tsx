import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Management from './pages/management';
import TOR from './pages/tor';

import AuthenticationPage from './pages';
import LoadingPage from './components/loading-page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/management" element={<Management />} />
        <Route path="/tor" element={<TOR />} />
        {/* Optional: Default route */}
        <Route path="/" element={<AuthenticationPage/>}/>
        <Route path="/loading-page" element={<LoadingPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
