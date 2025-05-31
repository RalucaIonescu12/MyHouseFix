import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import RegisterPage from "./RegisterPage/RegisterPage";
import { FeedPage } from './FeedPage/FeedPage';
import  ProfilePage from './Profile/ProfilePage';
import  ClientProfilePage from './Profile/ClientProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/feed" element={<FeedPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profileClient" element={<ClientProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
