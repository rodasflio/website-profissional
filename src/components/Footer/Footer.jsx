import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Meu Site Profissional. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;