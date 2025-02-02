import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from "react-router-dom";
// import 'react-toastify/dist/ReactTostify.css';
import 'react-toastify';

import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from  './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage' ;
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Nabar';
import Footer from './landing_page/Footer';
import NotFoundPage from './landing_page/NotFoundPage';
import Login from './landing_page/signup/Login';
import ServicesPage from './landing_page/services/servicesPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/services" element={<ServicesPage/>} />
      
      <Route path="/support" element={<SupportPage/>} />
      <Route path="/login" element={<Login/>} />
      
      <Route path="*" element={<NotFoundPage/>} />
      
    </Routes>
  <Footer/>
  </BrowserRouter>
);


