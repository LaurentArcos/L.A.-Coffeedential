import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1 className="header-title">
        <span className="header-title-main">L.A. Coffeedential</span>
        <span className="header-title-slogan">Your new favorite coffee place</span>
      </h1>

      <ul className="NavBar">
      <NavLink to="/" className={(nav) => (nav.isActive ? "NavBar-Links-active" : "NavBar-Links")}>
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/about" className={(nav) => (nav.isActive ? "NavBar-Links-active" : "NavBar-Links")}>
        <li>A propos</li>
      </NavLink>
      <NavLink to="/products" className={(nav) => (nav.isActive ? "NavBar-Links-active" : "NavBar-Links")}>
        <li>Nos Produits</li>
      </NavLink>
      <NavLink to="/store" className={(nav) => (nav.isActive ? "NavBar-Links-active" : "NavBar-Links")}>
        <li>Infos pratiques</li>
      </NavLink>
    </ul>
  </div>
  )
}

export default Header