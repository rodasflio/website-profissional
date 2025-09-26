import React from 'react';
import MetaTags from '../../components/MetaTags/MetaTags';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Nome do Fundador',
      role: 'Fundador & CEO',
      bio: 'Com mais de 10 anos de experiência em tecnologia, ele lidera a equipe com uma visão inovadora e um compromisso com a excelência.',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Nome do CTO',
      role: 'CTO',
      bio: 'Responsável pela arquitetura técnica e inovação de nossos projetos, garantindo que nossas soluções sejam robustas e escaláveis.',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      name: 'Nome do Designer',
      role: 'Designer Chefe',
      bio: 'Especialista em UI/UX, ele cria experiências digitais intuitivas e visualmente atraentes que encantam nossos usuários.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
    },
  ];

  return (
    <div className="about-page-container">
      <MetaTags
        title="Sobre Nós | Conheça Nossa História e Equipe"
        description="Saiba mais sobre a nossa empresa, nossa história, missão e os valores que nos guiam. Conheça a equipe de especialistas."
        keywords="sobre nós, história, equipe, missão, valores, empresa"
      />
      <header className="about-header">
        <h1 className="about-title">Sobre Nós</h1>
        <p className="about-intro">Conheça a nossa história, nossa missão e a equipe que torna tudo isso possível.</p>
      </header>

      <section className="about-story">
        <div className="story-content">
          <h2 className="story-title">Nossa História</h2>
          <p>
            Fundada em 20XX, nossa empresa nasceu da paixão por solucionar desafios complexos com tecnologia. Começamos como um pequeno time de desenvolvedores e, com dedicação e foco em resultados, crescemos para nos tornar uma referência no mercado.
          </p>
          <p>
            Hoje, atendemos clientes de diversos segmentos, ajudando-os a transformar suas ideias em projetos digitais de sucesso. Nossa jornada é marcada pela inovação e pela busca constante por aperfeiçoamento.
          </p>
        </div>
      </section>

      <section className="mission-vision-values-section">
        <h2 className="section-title">Nossa Essência</h2>
        <p className="section-subtitle">O que nos move e em que acreditamos.</p>
        <div className="essence-cards">
          <div className="essence-card">
            <span className="essence-icon">🎯</span>
            <h3>Missão</h3>
            <p>Oferecer soluções tecnológicas que impulsionam o crescimento e a eficiência de nossos clientes, criando parcerias duradouras baseadas em confiança e resultados.</p>
          </div>
          <div className="essence-card">
            <span className="essence-icon">🔮</span>
            <h3>Visão</h3>
            <p>Ser reconhecida como a principal parceira de inovação digital, transformando o modo como as empresas operam e se conectam com o mundo.</p>
          </div>
          <div className="essence-card">
            <span className="essence-icon">🤝</span>
            <h3>Valores</h3>
            <ul>
              <li>Inovação contínua</li>
              <li>Transparência total</li>
              <li>Foco no cliente</li>
              <li>Excelência em cada detalhe</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="team-title">Conheça Nossa Equipe</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;