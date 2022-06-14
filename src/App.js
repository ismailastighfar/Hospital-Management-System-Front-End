import './App.scss';

import Login from './pages/Login/Login'
import LandingPage from './pages/landingPage/LandingPage';
import Layout from './pages/Layout/Layout';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';
import Drugs from './pages/Drugs/Drugs';
import Profile from './pages/Profile/Profile';
import CreateProfile from './pages/CreateProfile/CreateProfile'
import CreateAppointement from './pages/CreateAppointement/CreateAppointement' 
import Doctor from './pages/Doctor/Doctor'
import  Questions  from './pages/Questions/Questions';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import { AuthProviderContext } from './components/AuthContext';

function App() {
  // const PrivateRoutes = [
  //   {
  //     path: 'profile/create',
  //     isPrivate: true,
  //     element: <CreateProfile />
  //   },
  //   {
  //     path: 'appointement/create',
  //     isPrivate: true,
  //     element: ''
  //   },
  //   {
  //     path: 'profile',
  //     isPrivate: true,
  //     element: <Profile />
  //   }
  // ]
  return (
    <div className="App">
      <AuthProviderContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            
            <Route path="doctor/search" element={<Search />} />
            <Route path="drugs" element={<Drugs />} />
            <Route path="Questions" element={<Questions />} />
            <Route path="Appointement/create/:id" element={<CreateAppointement />} />
            <Route path="about" element={<Contact />} />
            <Route path="Contact" element={<About />} />

            <Route path="doctor/:id" element={<Doctor />}>
             <Route path="Appointement/create/:id" element={<CreateAppointement />} />
            </Route>
          
            <Route
            path='profile'
            element={ 
              !Boolean(localStorage.getItem('currentUser')) ? ( <Navigate  replace to="/login" /> ) : ( <Profile /> )
            }
            />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile/create" element={<CreateProfile />} ></Route>

          </Routes>
        </BrowserRouter>
      </AuthProviderContext>
    </div>
  )

}

export default App;
