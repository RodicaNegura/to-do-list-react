import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home"
import Profile from './pages/profile';
import Contact from './pages/contact';
import Navbar from './navbar';
import { QueryClient, QueryClientProvider } from 'react-query';



const  App = () => {
  const client = new QueryClient();
  return  ( 
    <div className='App'>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}/>
            {/* <Route path="/profile" element={<Profile />}/> */}
            <Route path="/contact" element={<Contact />}/>
            <Route path='*' element={<h1> Page Not Found </h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
