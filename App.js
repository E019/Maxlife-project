import React, { useState } from 'react';
import './App.css';
import Navbar from '../src/Navbar';
// import Carousel from './Components/';
import { Route, Routes, useParams } from 'react-router-dom';
// import About from './Mydocument/About';
import Contact from './Components/Contact';
import Aboutus from './Components/Aboutus';
import New from './Components/New';
import Bags from './Components/Bags';
import Backpacs from './Components/Backpacs';
import Cosmeticbags from './Components/Cosmeticbags';
import Home from './Home';
import Parent from './Components/Parent';
import Product from './Components/Product';
import Footer from './Components/Footer';
import Login from './Components/Login';

function App() {



  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>

      {!isLoggedIn ? (<Login onLogin={() => setIsLoggedIn(true)} />) : (<>

        <Navbar />

        <Parent />


        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/New' element={<New />}></Route>
          <Route path='/Bags' element={<Bags />}></Route>
          <Route path='/Backpacks' element={<Backpacs />}></Route>
          <Route path='/Cosmeticbags' element={<Cosmeticbags />}></Route>
          <Route path='/Aboutus' element={<Aboutus />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Product' element={<Product />}></Route>
          {/* <Route path='/Login' element={<Login />}></Route> */}


        </Routes >

        <Footer />
      </>

      )}

    </>
  );
}
export default App;

