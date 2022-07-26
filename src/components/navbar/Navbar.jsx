import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img className="logo" src={logo} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Services</a></p>
          <p><a href="#possibility">Products</a></p>
          <p><a href="#features">Technical support</a></p>
          <button type="button" className="gpt3-button"><a href="https://docs.google.com/forms/d/1pRSXqSTNP7gSMeVemoEAtKkccFWu5QDFJF355Iagpq8/edit">Join Us</a></button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button type="button" className="gpt3-button"><a href="tel:89881-80808">Book A Service</a></button>

        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p><a href="https://docs.google.com/forms/d/1pRSXqSTNP7gSMeVemoEAtKkccFWu5QDFJF355Iagpq8/edit">Join Us</a></p>
        <button type="button"><a href="tel:89881-80808">Book A Service</a></button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">Services</a></p>
            <p><a href="#possibility">Products</a></p>
            <p><a href="#features">Technical support</a></p>
          </div>
          <button type="button" className="gpt3-button"><a href="https://docs.google.com/forms/d/1pRSXqSTNP7gSMeVemoEAtKkccFWu5QDFJF355Iagpq8/edit">Join Us</a></button>
          &nbsp;
          <button type="button" className="gpt3-button2"><a href="tel:89881-80808">Book A Service</a></button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
