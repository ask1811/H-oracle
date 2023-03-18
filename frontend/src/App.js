import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
//import Signup from './pages/Signup/signup'; 
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/Login' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;