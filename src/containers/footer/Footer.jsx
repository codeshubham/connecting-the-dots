import React from 'react';
// import { Document } from 'react-pdf';
import logo from '../../assets/logo.PNG';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Take our services</h1>
    </div>

    {/* <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img className="logo" src={logo} />
        <p>HIMACHAL(INDIA), All Rights Reserved</p>
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>connectingthedot.s@outlook.com</p>
        <p>89881-80808</p>
        <p>Terms and conditions : </p>
        <p>Sign and send the file to the mentioned email id : </p>
        <a href="https://drive.google.com/file/d/1WrhzchbmQbmjblNULOKwyhMY6NstnO7e/view?usp=sharing">Terms and conditions</a>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 CONNECTING THE DOTS. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
