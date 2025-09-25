import React, { useState } from 'react';
import MetaTags from '../../components/MetaTags/MetaTags';
import PortfolioFilters from '../../components/PortfolioFilters/PortfolioFilters';
import Card from '../../components/Card/Card'; // Importação do componente Card
import './Portfolio.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const projects = [
    {
      title: 'Projeto E-commerce X',
      description: 'Desenvolvimento de uma loja virtual completa, com carrinho de compras, sistema de pagamento e painel de controle para o lojista.',
      image: 'https://via.placeholder.com/600x400?text=Projeto+E-commerce+X',
      category: 'Desenvolvimento Web'
    },
    {
      title: 'Landing Page para Startup',
      description: 'Criação de uma landing page de alta conversão para captar leads e apresentar a proposta de valor de uma nova startup de tecnologia.',
      image: 'https://via.placeholder.com/600x400?text=Landing+Page+Startup',
      category: 'Marketing Digital'
    },
    {
      title: 'Sistema de Agendamento',
      description: 'Plataforma customizada para agendamento online de serviços, com integração de calendários e notificações automáticas.',
      image: 'https://via.placeholder.com/600x400?text=Sistema+Agendamento',
      category: 'Consultoria de TI'
    },
    {
      title: 'Portal de Notícias',
      description: 'Desenvolvimento de um portal de notícias responsivo e otimizado para a leitura em dispositivos móveis.',
      image: 'https://via.placeholder.com/600x400?text=Portal+Noticias',
      category: 'Desenvolvimento Web'
    },
    {
      title: 'Campanha de E-mail Marketing',
      description: 'Criação e gestão de uma campanha de e-mail marketing segmentada, com automação e testes A/B para otimização de resultados.',
      image: 'https://via.placeholder.com/600x400?text=Email+Marketing',
      category: 'Marketing Digital'
    },
    {
      title: 'Auditoria de Segurança',
      description: 'Análise completa da infraestrutura de TI para identificar vulnerabilidades e propor soluções para garantir a segurança dos dados.',
      image: 'https://via.placeholder.com/600x400?text=Auditoria+Seguranca',
      category: 'Consultoria de TI'
    },
  ];

  const categories = ['Todos', ...new Set(projects.map(project => project.category))];
  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const caseStudies = [
    {
      title: 'E-commerce de Moda: Aumentando Vendas em 150%',
      image: 'https://via.placeholder.com/800x600?text=Case+Study+E-commerce',
      description: 'Trabalhamos com uma marca de moda local para modernizar sua presença online. O desafio era converter visitantes em clientes fiéis.',
      challenges: [
        'Baixa taxa de conversão',
        'Experiência de usuário defasada',
        'Processo de checkout complicado'
      ],
      solutions: [
        'Redesign completo do site com foco em UX/UI',
        'Otimização do fluxo de compra',
        'Implementação de estratégias de marketing digital'
      ],
      results: 'Aumento de 150% nas vendas online e redução de 40% no abandono de carrinho.'
    },
    {
      title: 'Aplicativo de Entregas: Otimizando a Logística',
      image: 'https://via.placeholder.com/800x600?text=Case+Study+App',
      description: 'Uma startup de entregas precisava de uma solução para gerenciar pedidos e motoristas de forma eficiente. Criamos um aplicativo customizado para as suas necessidades.',
      challenges: [
        'Problemas de comunicação entre motoristas e clientes',
        'Roteirização manual e ineficiente',
        'Dificuldade no rastreamento de entregas'
      ],
      solutions: [
        'Desenvolvimento de um aplicativo nativo para motoristas',
        'Integração de um sistema de rastreamento em tempo real',
        'Criação de um painel de controle intuitivo para a gestão'
      ],
      results: 'Redução de 30% no tempo de entrega e aumento da satisfação do cliente.'
    }
  ];

  return (
    <div className="portfolio-page-container">
      <MetaTags
        title="Portfólio | Nossos Projetos de Sucesso"
        description="Confira nossos projetos de destaque, incluindo estudos de caso detalhados em desenvolvimento web, marketing e TI."
        keywords="portfólio, projetos, web, marketing digital, consultoria, estudos de caso"
      />
      <header className="portfolio-header">
        <h1 className="portfolio-title">Nosso Portfólio</h1>
        <p className="portfolio-intro">Confira alguns de nossos projetos mais recentes e veja como ajudamos nossos clientes a alcançar seus objetivos.</p>
      </header>

      <PortfolioFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <section className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Card key={index}> {/* Usando o componente Card */}
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <span className="project-category">{project.category}</span>
              </div>
            </Card>
          ))
        ) : (
          <p className="no-results">Nenhum projeto encontrado nesta categoria.</p>
        )}
      </section>
      
      <section className="case-studies-section">
        <h2 className="case-studies-title">Estudos de Caso Detalhados</h2>
        <p className="case-studies-intro">Conheça o processo por trás de nossos projetos de sucesso.</p>
        
        {caseStudies.map((caseStudy, index) => (
          <article className={`case-study-item ${index % 2 !== 0 ? 'reverse-layout' : ''}`} key={index}>
            <div className="case-study-image-container">
              <img src={caseStudy.image} alt={caseStudy.title} className="case-study-image" />
            </div>
            <div className="case-study-content">
              <h3 className="case-study-title">{caseStudy.title}</h3>
              <p className="case-study-description">{caseStudy.description}</p>
              <div className="case-study-details">
                <div className="details-col">
                  <h4>Desafios</h4>
                  <ul>
                    {caseStudy.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="details-col">
                  <h4>Soluções</h4>
                  <ul>
                    {caseStudy.solutions.map((solution, i) => (
                      <li key={i}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="case-study-results"><strong>Resultados:</strong> {caseStudy.results}</p>
            </div>
          </article>
        ))}
      </section>
      
    </div>
  );
};

export default Portfolio;