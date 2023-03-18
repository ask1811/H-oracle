import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes }  from 'react-router-dom';
//import Home from './pages/Home/home'; 
//import Signup from './pages/Signup/signup'; 
import Navbar from './Components/Navbar/Navbar';
//import Login from './pages/Login/login'; 
import Details from './pages/Details/Details'; 

function App() {
return (
  <div className="App">
    <BrowserRouter>
  	<Navbar/>
  	<Routes>
  		
      <Route path='/Details' element={<Details/>} />
	  </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;