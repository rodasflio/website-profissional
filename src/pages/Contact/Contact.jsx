import React, { useState } from 'react';
import MetaTags from '../../components/MetaTags/MetaTags';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Formulário enviado! (Funcionalidade de envio real será implementada depois)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page-container">
      <MetaTags
        title="Contato | Fale Conosco"
        description="Entre em contato com a nossa equipe para solicitar um orçamento ou tirar dúvidas. Estamos prontos para ajudar."
        keywords="contato, orçamento, telefone, email, formulário de contato"
      />
      <header className="contact-header">
        <h1 className="contact-title">Entre em Contato</h1>
        <p className="contact-intro">Estamos prontos para ouvir sua ideia. Preencha o formulário ou use as informações de contato abaixo para falar conosco.</p>
      </header>

      <section className="contact-content">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensagem</button>
          </form>
        </div>

        <div className="contact-info-container">
          <div className="contact-info-card">
            <h3>Nossas Informações</h3>
            <p><strong>E-mail:</strong> contato@seusite.com.br</p>
            <p><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
            <p><strong>Endereço:</strong> Rua da Inovação, 123, Cidade Nova - UF</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;