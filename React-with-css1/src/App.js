import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Developer from './components/developer/Developer';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>

      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Developer></Developer>
      <Subscribe></Subscribe>
      <Footer></Footer>

    </>
  );
};

export default App;
