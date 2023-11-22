import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home"
import Profile from './pages/profile';
import Contact from './pages/contact';
import Navbar from './navbar';

 export const AppContext = createContext();

const  App = () => {
  const [username, setUsername] = useState("RodicaWeb");
  return  ( 
    <div className='App'>
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path='*' element={<h1> Page Not Found </h1>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
