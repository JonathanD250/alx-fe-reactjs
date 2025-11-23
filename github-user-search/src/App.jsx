import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;