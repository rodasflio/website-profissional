import React from 'react';
import './Clients.css';

const Clients = () => {
  const clientLogos = [
    { name: 'Tech Innovate', src: 'https://placehold.co/150x80/2c3e50/d8e0ec?text=Tech+Innovate' },
    { name: 'Global Solutions', src: 'https://placehold.co/150x80/2c3e50/d8e0ec?text=Global+Solutions' },
    { name: 'Future Enterprises', src: 'https://placehold.co/150x80/2c3e50/d8e0ec?text=Future+Enterprises' },
    { name: 'Dynamic Corp', src: 'https://placehold.co/150x80/2c3e50/d8e0ec?text=Dynamic+Corp' },
    { name: 'Apex Innovations', src: 'https://placehold.co/150x80/2c3e50/d8e0ec?text=Apex+Innovations' },
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