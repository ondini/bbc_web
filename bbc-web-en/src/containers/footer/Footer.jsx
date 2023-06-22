import React from 'react';
import gpt3Logo from '../../assets/BBC_logo.png';
import './Footer.css';

import {RiFacebookBoxFill, RiInstagramFill, RiTwitterFill} from 'react-icons/ri'

const Footer = () => (
  <div className="footer_wrapper"> 
    <div className="footer container"> 
      <div className="footer_left">
        <div className="footer-links_logo">
          <img src={gpt3Logo} alt="bbc_logo" />
        </div>
        <div className="footer_socials">
          <RiFacebookBoxFill color="#fff" />
          <RiInstagramFill color="#fff" />
          <RiTwitterFill color="#fff" />
        </div>
      <div className="footer-legal">
        <p><a href="#home">Terms of Service</a></p>
        <p><a href="#home">Privacy</a></p>
      </div>
      </div>
      <div className="footer-links_container">
        <p><a href="#home">Intro</a></p>
        <p><a href="#whybbc">Why BBC?</a></p>
        <p><a href="#services">Services</a></p>
        <p><a href="#profits">Profits</a></p>
        <p><a href="#about">About</a></p>
      </div>
    </div>
    <div className="footer-copyright">
      <p>Copyright 2022 BBC. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
