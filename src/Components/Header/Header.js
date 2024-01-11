import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <div className="App">
      <header className="header">
        <div className="left">
          <div className="address">
            <FaMapMarkerAlt className="icon" />
            <span>1413 K Street NW, 9th Floor, Washington D.C. 20005</span>
          </div>
          <div className="email">
            <FaEnvelope className="icon" />
            <span>support@worldvisatravel.com</span>
          </div>
        </div>
        <div className="right">
          <FaWhatsapp className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaFacebook className="social-icon" />
        </div>
      </header>
    </div>
  );
}

export default Header;
