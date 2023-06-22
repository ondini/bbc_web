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
        <p><a href="#home">Obchodní podmínky</a></p>
        <p><a href="#home">Ochrana soukromí</a></p>
      </div>
      </div>
      <div className="footer-links_container">
        <p><a href="#home">Úvod</a></p>
        <p><a href="#whybbc">Proč BBC?</a></p>
        <p><a href="#services">Služby</a></p>
        <p><a href="#profits">Zisky</a></p>
        <p><a href="#about">O nás</a></p>
      </div>
    </div>
    <div className="footer-copyright">
      <p>Copyright 2022 BBC. Všechna práva vyhrazena.</p>
    </div>
  </div>
);

export default Footer;
