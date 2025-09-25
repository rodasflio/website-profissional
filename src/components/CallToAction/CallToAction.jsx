import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Pronto para Começar Seu Projeto?</h2>
        <p className="cta-text">
          Entre em contato conosco e vamos transformar suas ideias em realidade.
        </p>
        <Link to="/contato" className="cta-button-final">
          Fale Conosco
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;