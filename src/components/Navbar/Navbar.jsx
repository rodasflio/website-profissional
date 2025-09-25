import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={() => setIsOpen(false)}>Seu Logo</Link>
      </div>
      
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link></li>
        <li><Link to="/servicos" onClick={() => setIsOpen(false)}>Serviços</Link></li>
        <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfólio</Link></li>
        <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
        <li><Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
        <li><Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;