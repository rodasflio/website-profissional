import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Quais serviços sua agência oferece?',
      answer: 'Oferecemos uma gama completa de serviços digitais, incluindo Desenvolvimento Web, Marketing Digital (SEO, Google Ads, redes sociais) e Consultoria de TI. Nosso foco é criar soluções personalizadas para o crescimento do seu negócio.'
    },
    {
      id: 2,
      question: 'Qual é o custo de um projeto?',
      answer: 'O custo varia muito dependendo da complexidade do projeto, das funcionalidades necessárias e do escopo de trabalho. Para obter um orçamento preciso, recomendamos que você entre em contato conosco para uma consultoria inicial gratuita. Analisaremos suas necessidades e prepararemos uma proposta detalhada.'
    },
    {
      id: 3,
      question: 'Quanto tempo leva para desenvolver um site?',
      answer: 'O prazo de desenvolvimento de um site depende de sua complexidade. Um site institucional simples pode levar de 4 a 6 semanas, enquanto um e-commerce ou uma plataforma mais complexa pode levar 3 meses ou mais. Estabelecemos um cronograma claro com você antes de iniciar qualquer projeto.'
    },
    {
      id: 4,
      question: 'Vocês oferecem suporte pós-lançamento?',
      answer: 'Sim, todos os nossos projetos incluem um período de suporte pós-lançamento. Também oferecemos planos de manutenção contínua e suporte técnico para garantir que seu site ou aplicação continue funcionando perfeitamente e possa evoluir com o tempo.'
    }
  ];

  const toggleAnswer = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="faq-page-container">
      <header className="faq-header">
        <h1 className="faq-title">Perguntas Frequentes</h1>
        <p className="faq-intro">Encontre aqui as respostas para as perguntas mais comuns sobre nossos serviços e processos.</p>
      </header>
      
      <section className="faq-list">
        {faqs.map(item => (
          <div className="faq-item" key={item.id}>
            <div className="faq-question" onClick={() => toggleAnswer(item.id)}>
              <span>{item.question}</span>
              <span className={`faq-icon ${openQuestion === item.id ? 'open' : ''}`}>▼</span>
            </div>
            <div className={`faq-answer ${openQuestion === item.id ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;