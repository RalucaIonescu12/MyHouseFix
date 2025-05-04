import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import RegisterPage from "./RegisterPage/RegisterPage";
import { FeedPage } from './FeedPage/FeedPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/feed" element={<FeedPage />} />
          <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
