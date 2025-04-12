import logo from './logo.svg';
import './App.css';
import './HomePage/HomePage'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
