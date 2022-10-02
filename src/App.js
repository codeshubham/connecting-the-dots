import React from 'react';
import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Navbar } from './components';
import Aboutus from './containers/aboutus/Aboutus.jsx';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
  // loading the navbar
      <Navbar />  
      <Header />
    </div>
    {/* <Brand /> */}
//loading the page components
    <WhatGPT3 />
    <CTA />
    <Features />
    <Aboutus />
    <Possibility />
    {/* <Blog /> */}
//loading the footer
    <Footer />
  </div>
);

export default App;
