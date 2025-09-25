import React from 'react';
import './Footer.css'; // Importa o arquivo de estilos do Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Meu Site Profissional. Todos os direitos reservados.</p>
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