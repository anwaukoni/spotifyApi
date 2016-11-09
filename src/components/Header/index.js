import React from 'react';
import './styles.css';
import assetLogo from '../../assets/logo.svg';

const Header = () => (
  <header className="Header-container">
    <img className="Header-branding" src={assetLogo} alt="branding" />
  </header>
);

export default Header;
