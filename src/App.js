import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home"
import Menu from './pages/menu';
import Contacts from './pages/contacts';
import Navbar from './navbar';

 
const  App = () => {
  return  ( 
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='*' element={<h1> Page Not Found </h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
