// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotLoggedIn from './pages/NotLoggedin';
import Navbar from './components/Navbar';

function App() {
  const isAuthenticated = Boolean(localStorage.getItem('token'));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/not-logged-in" element={<NotLoggedIn />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <NotLoggedIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
