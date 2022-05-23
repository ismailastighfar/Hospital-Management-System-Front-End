
import './App.scss';

import Login from './pages/Login/Login'
import LandingPage from './pages/landingPage/LandingPage';
import Layout from './pages/Layout/Layout';
import Register from './pages/Register/Register';
import CreateProfile from './pages/CreateProfile/CreateProfile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';


function App() {
  return (
    
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="CreateProfile" element={<CreateProfile />} />
        </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
