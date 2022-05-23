
import './App.scss';

import Login from './pages/Login/Login'
import LandingPage from './pages/landingPage/LandingPage';
import Layout from './pages/Layout/Layout';
import Register from './pages/Register/Register';
<<<<<<< HEAD
import Search from './pages/Search/Search';
import Drugs from './pages/Drugs/Drugs';


=======
import CreateProfile from './pages/CreateProfile/CreateProfile';
>>>>>>> e060f1c9fad19561dd9a3aa21713f819893741b2
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
<<<<<<< HEAD
          <Route path="search" element={<Search />} />
          <Route path="drugs" element={<Drugs />} />

        </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  )

=======
          <Route path="CreateProfile" element={<CreateProfile />} />
        </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
>>>>>>> e060f1c9fad19561dd9a3aa21713f819893741b2
}

export default App;
