/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resume from './components/Resume.jsx';
import Files from './components/Files.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/files" element={<Files />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;