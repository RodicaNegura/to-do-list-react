import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home"
import Profile from './pages/profile';
import Contact from './pages/contact';
import Navbar from './navbar';

 
const  App = () => {
  const [username, setUsername] = useState("RodicaWeb");
  return  ( 
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home username={username}/>}/>
          <Route path="/profile" element={<Profile  username={username} setUsername={setUsername}/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path='*' element={<h1> Page Not Found </h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
