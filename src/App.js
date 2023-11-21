import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home"
import Menu from './pages/menu';
import Contacts from './pages/contacts';
 
const  App = () => {
  return  ( 
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contacts' element={<Contacts />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
