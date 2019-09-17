import React from 'react'
import logo from '../../src/logo.svg';

const Header = ({title}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="navbar-brand">
      <img src={logo} alt="logo" style={{width: 50}} />
      {title}
    </div>
  </nav>
)

export default Header;
