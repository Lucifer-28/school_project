/** @format */

import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from '../Main/Home/Home';
import About from '../Main/About/About';
import Contact from '../Main/Contact/Contact';
import Admission from '../Main/Admission/Admission';
import NotFound from '../Main/NotFound/NotFound';

const Pages = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/admission' element={<Admission />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
