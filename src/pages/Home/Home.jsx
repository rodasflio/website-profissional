import React from 'react';
import MetaTags from '../../components/MetaTags/MetaTags';
import Card from '../../components/Card/Card';
import Testimonials from '../../components/Testimonials/Testimonials';
import Clients from '../../components/Clients/Clients';
import CallToAction from '../../components/CallToAction/CallToAction';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Criação de websites modernos e responsivos, focados na experiência do usuário e otimização para motores de busca.',
      icon: '🌐'
    },
    {
      title: 'Marketing Digital',
      description: 'Estratégias completas para aumentar a visibilidade da sua marca, gerar leads e impulsionar suas vendas online.',
      icon: '📈'
    },
    {
      title: 'Consultoria de TI',
      description: 'Análise e otimização de processos tecnológicos para garantir a eficiência e segurança da sua infraestrutura.',
      icon: '💡'
    },
  ];

  return (
    <div className="home-container">
      <MetaTags
        title="Seu Site Profissional | Início"
        description="Transforme suas ideias em realidade com soluções digitais inovadoras. Especialistas em desenvolvimento web e marketing digital."
        keywords="serviços, produtos, profissional, empresa, qualidade, home"
      />
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Soluções Inovadoras para o Seu Negócio</h1>
          <p className="hero-subtitle">
            Oferecemos serviços de alta qualidade para impulsionar a sua empresa no mundo digital.
          </p>
          <a href="/servicos" className="cta-button">
            Conheça Nossos Serviços
          </a>
        </div>
        <div className="hero-image">
          {/* Novo link de imagem para testar */}
          <img 
            src="https://placehold.co/600x400/2c3e50/f3f7fd/jpg?text=Soluções+Digitais" 
            alt="Ilustração de soluções digitais" 
          />
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2 className="about-title">Nossa Missão é Impulsionar o Seu Crescimento</h2>
          <p className="about-text">
            Somos uma equipe apaixonada por tecnologia e inovação, dedicada a ajudar empresas a alcançarem seu potencial máximo. Com anos de experiência no mercado, desenvolvemos soluções personalizadas que atendem às necessidades específicas de cada cliente.
          </p>
          <p className="about-text">
            Acreditamos que a parceria e a transparência são a chave para o sucesso. Nosso objetivo é construir relações duradouras, oferecendo suporte contínuo e resultados excepcionais.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Nossa equipe" 
          />
        </div>
      </section>

      <section className="services-section">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">Conheça as soluções que oferecemos para o seu negócio.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </Card>
          ))}
        </div>
      </section>
      
      <Testimonials />
      <Clients />
      <CallToAction />
      
    </div>
  );
};

export default Home;