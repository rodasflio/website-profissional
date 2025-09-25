import React from 'react';
import './Clients.css';

const Clients = () => {
  // Dados de exemplo para os logos dos clientes
  const clientLogos = [
    { name: 'Empresa A', src: 'https://via.placeholder.com/150x80?text=Logo+A' }, // Substitua pelos seus logos
    { name: 'Empresa B', src: 'https://via.placeholder.com/150x80?text=Logo+B' },
    { name: 'Empresa C', src: 'https://via.placeholder.com/150x80?text=Logo+C' },
    { name: 'Empresa D', src: 'https://via.placeholder.com/150x80?text=Logo+D' },
    { name: 'Empresa E', src: 'https://via.placeholder.com/150x80?text=Logo+E' },
  ];

  return (
    <section className="clients-section">
      <h2 className="section-title">Parceiros que Confiam em Nós</h2>
      <div className="clients-grid">
        {clientLogos.map((client, index) => (
          <div className="client-logo-container" key={index}>
            <img src={client.src} alt={client.name} className="client-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;