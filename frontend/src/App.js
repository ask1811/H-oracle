import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Details from './pages/Details/Details';
import Details2 from './pages/Details2/Details2';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/Details2' element={<Details2 />} />
          <Route path='/Login' element={
            <Login />
          } />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;