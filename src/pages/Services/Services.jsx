import React from 'react';
import MetaTags from '../../components/MetaTags/MetaTags';
import Card from '../../components/Card/Card'; // Importação do componente Card
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: 'Desenvolvimento Web',
      description: 'Construímos sites e aplicações web de alta performance, utilizando as tecnologias mais modernas do mercado. Nossos projetos são totalmente responsivos, otimizados para SEO e pensados para a melhor experiência do usuário.',
      details: [
        'Sites institucionais e e-commerce',
        'Sistemas de gerenciamento (CMS)',
        'Integração com APIs e serviços externos',
        'Manutenção e suporte técnico'
      ]
    },
    {
      title: 'Marketing Digital',
      description: 'Elaboramos estratégias completas de marketing digital para impulsionar sua marca e gerar resultados reais. De SEO a gestão de mídias sociais, nosso objetivo é maximizar seu retorno sobre investimento.',
      details: [
        'Otimização para motores de busca (SEO)',
        'Campanhas de anúncios (Google Ads, Meta Ads)',
        'Estratégias de conteúdo e e-mail marketing',
        'Gestão de redes sociais'
      ]
    },
    {
      title: 'Consultoria de TI',
      description: 'Oferecemos consultoria especializada para otimizar seus processos de TI, aumentar a segurança de dados e garantir que a tecnologia seja uma aliada no crescimento do seu negócio.',
      details: [
        'Análise e planejamento de infraestrutura',
        'Auditoria de segurança e gestão de riscos',
        'Implementação de soluções em nuvem',
        'Treinamento e capacitação de equipes'
      ]
    }
  ];

  const processSteps = [
    {
      step: '1. Descoberta',
      description: 'Nós nos reunimos com você para entender suas necessidades, objetivos e desafios. Analisamos seu mercado e concorrência para criar uma estratégia personalizada.'
    },
    {
      step: '2. Planejamento',
      description: 'Com base nas informações coletadas, elaboramos um plano detalhado, definindo o escopo do projeto, prazos e as tecnologias a serem utilizadas.'
    },
    {
      step: '3. Execução',
      description: 'Nossa equipe de especialistas coloca o plano em ação, mantendo uma comunicação constante com você para garantir que tudo esteja alinhado com suas expectativas.'
    },
    {
      step: '4. Entrega e Suporte',
      description: 'Entregamos o projeto finalizado e oferecemos suporte contínuo para garantir que sua solução continue funcionando perfeitamente e possa evoluir no futuro.'
    }
  ];

  return (
    <div className="services-page-container">
      <MetaTags
        title="Nossos Serviços | Soluções Digitais Completas"
        description="Descubra nossos serviços de desenvolvimento web, marketing digital e consultoria de TI. Soluções personalizadas para o seu sucesso."
        keywords="desenvolvimento web, marketing digital, consultoria de TI, sites, e-commerce, SEO"
      />
      <header className="services-header">
        <h1 className="services-title">Nossos Serviços</h1>
        <p className="services-intro">Oferecemos soluções completas e personalizadas para ajudar a sua empresa a crescer no ambiente digital.</p>
      </header>

      <section className="services-list">
        {servicesList.map((service, index) => (
          <Card key={index}> {/* Usando o componente Card */}
            <h2 className="service-item-title">{service.title}</h2>
            <p className="service-item-description">{service.description}</p>
            <ul className="service-details-list">
              {service.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <section className="process-section">
        <h2 className="process-title">Nosso Processo de Trabalho</h2>
        <p className="process-subtitle">Transparência e eficiência em cada etapa do seu projeto.</p>
        <div className="process-steps">
          {processSteps.map((item, index) => (
            <div className="process-step" key={index}>
              <span className="step-number">{item.step}</span>
              <p className="step-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;