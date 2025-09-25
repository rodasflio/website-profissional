import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  // Dados de exemplo para os depoimentos
  const testimonials = [
    {
      text: 'O trabalho foi impecável! Profissionalismo e atenção aos detalhes em todas as etapas do projeto. Nossos resultados superaram as expectativas.',
      name: 'Maria Silva',
      title: 'CEO da Empresa X',
      image: 'https://via.placeholder.com/100' // Substitua pela imagem do cliente
    },
    {
      text: 'Uma equipe incrivelmente talentosa. Conseguiram traduzir nossa visão em um site funcional e bonito. Recomendo a todos!',
      name: 'João Mendes',
      title: 'Gerente de Marketing',
      image: 'https://via.placeholder.com/100' // Substitua pela imagem do cliente
    },
    {
      text: 'O suporte contínuo e a dedicação ao nosso projeto fizeram toda a diferença. Estamos muito satisfeitos com a parceria.',
      name: 'Ana Costa',
      title: 'Fundadora da Startup Y',
      image: 'https://via.placeholder.com/100' // Substitua pela imagem do cliente
    },
  ];

  return (
    <section className="testimonials-section">
      <h2 className="section-title">O que nossos clientes dizem</h2>
      <p className="section-subtitle">A satisfação de quem confia em nosso trabalho.</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} className="author-image" />
              <div className="author-info">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;