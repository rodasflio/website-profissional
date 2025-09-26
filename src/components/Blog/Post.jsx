import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MetaTags from '../MetaTags/MetaTags';
import './Blog.css';

const blogPosts = [
  {
    id: 'primeiro-post-seo',
    title: 'Guia Completo de SEO para Iniciantes',
    image: 'https://images.unsplash.com/photo-1557426715-99884e857416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: '10 de Setembro, 2025',
    tags: ['SEO', 'Marketing Digital', 'Guia'],
    content: `
      <p>A otimização para motores de busca (SEO) é o processo de melhorar a visibilidade do seu site nos resultados de busca orgânica, como o Google. Quando o seu site aparece em uma posição mais alta, a probabilidade de as pessoas clicarem é muito maior, o que resulta em mais tráfego qualificado para o seu negócio.</p>
      
      <h3>Por Onde Começar?</h3>
      
      <p>A primeira etapa é a pesquisa de palavras-chave. Identifique os termos que seu público-alvo utiliza para buscar produtos ou serviços como os seus. Ferramentas como o Google Keyword Planner ou o Ahrefs podem ajudar nessa tarefa. Concentre-se em palavras-chave que tenham um bom volume de busca, mas que não sejam extremamente competitivas.</p>
      
      <p>Em seguida, otimize o conteúdo do seu site. Isso inclui a criação de títulos atraentes, o uso de subtítulos (H2, H3), a inclusão das palavras-chave de forma natural no texto e a otimização de imagens. Lembre-se, o conteúdo é o rei, mas ele precisa ser otimizado para ser encontrado.</p>
      
      <h3>Técnicas de SEO On-Page e Off-Page</h3>
      
      <p>O SEO On-Page refere-se a tudo o que você pode fazer diretamente no seu site para melhorar seu ranqueamento. Isso inclui a otimização da estrutura URL, a velocidade de carregamento da página e a criação de links internos. Já o SEO Off-Page envolve ações externas, como a construção de backlinks de sites de alta autoridade.</p>
    `
  },
  {
    id: 'tendencias-marketing-digital',
    title: '5 Tendências de Marketing Digital para 2025',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b2baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: '05 de Setembro, 2025',
    tags: ['Marketing Digital', 'Tendências', 'Inovação'],
    content: `
      <p>O mundo do marketing digital está em constante evolução. Para se manter à frente da concorrência, é vital acompanhar as últimas tendências. Em 2025, algumas delas se destacarão e moldarão as estratégias das empresas.</p>
      
      <ol>
        <li><strong>Inteligência Artificial Personalizada:</strong> A IA se tornará ainda mais sofisticada, permitindo a criação de campanhas de marketing ultrarrápida, personalizadas para cada usuário.</li>
        <li><strong>Experiência do Usuário (UX) Imersiva:</strong> As marcas investirão em experiências de usuário mais imersivas, utilizando realidade aumentada (AR) e realidade virtual (VR) para criar interações memoráveis.</li>
        <li><strong>Marketing de Conteúdo de Curto Prazo:</strong> O sucesso de plataformas como TikTok e Reels mostra que o conteúdo de vídeo curto continuará dominando. As empresas precisarão criar conteúdo rápido e cativante para capturar a atenção de seu público.</li>
        <li><strong>Privacidade do Consumidor:</strong> Com a crescente preocupação com a privacidade, as marcas que priorizam a transparência e dão aos consumidores controle sobre seus dados sairão na frente.</li>
        <li><strong>E-commerce Social:</strong> A integração entre redes sociais e plataformas de e-commerce será ainda mais forte. As compras serão cada vez mais realizadas diretamente dentro das plataformas sociais.</li>
      </ol>
      
      <p>Manter-se atualizado sobre estas tendências é fundamental para o sucesso de sua estratégia de marketing digital.</p>
    `
  },
  {
    id: 'web-design-responsivo',
    title: 'A Importância do Web Design Responsivo',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: '01 de Setembro, 2025',
    tags: ['Web Design', 'Desenvolvimento Web', 'SEO'],
    content: `
      <p>Com o aumento do uso de dispositivos móveis para navegar na internet, ter um site responsivo deixou de ser um diferencial e se tornou uma necessidade. Um site responsivo se adapta a qualquer tamanho de tela, proporcionando uma experiência de usuário consistente e agradável, seja em um smartphone, tablet ou desktop.</p>

      <h3>Por que o Design Responsivo é Crucial?</h3>

      <p>Além de melhorar a experiência do usuário, o design responsivo tem um impacto direto no ranqueamento do seu site no Google. O Google favorece sites que são otimizados para dispositivos móveis, e a falta de um design responsivo pode afetar negativamente sua posição nos resultados de busca. Isso significa menos visibilidade para o seu negócio.</p>
    `
  },
  {
    id: 'otimizacao-velocidade-site',
    title: 'Como Otimizar a Velocidade do Seu Site',
    image: 'https://images.unsplash.com/photo-1453928582030-94d0c11f75d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: '25 de Agosto, 2025',
    tags: ['Performance', 'Desenvolvimento Web', 'Otimização'],
    content: `
      <p>A velocidade de carregamento do seu site é um fator crítico para o sucesso online. Um site lento pode frustrar os usuários, levando-os a abandoná-lo antes mesmo de verem o conteúdo. Além disso, a velocidade da página é um dos fatores de ranqueamento do Google.</p>

      <h3>Dicas para Melhorar a Velocidade do Site</h3>
      <ul>
        <li>Otimizar imagens, comprimindo-as para reduzir o tamanho do arquivo.</li>
        <li>Minificar arquivos CSS, JavaScript e HTML.</li>
        <li>Utilizar um CDN (Content Delivery Network) para distribuir o conteúdo do site.</li>
        <li>Habilitar o cache do navegador.</li>
      </ul>

      <p>A otimização contínua da velocidade do seu site é um investimento que se traduz em melhor experiência para o usuário e maior visibilidade para o seu negócio.</p>
    `
  },
  {
    id: 'conteudo-que-converte',
    title: 'Criando Conteúdo que Converte Vendas',
    image: 'https://images.unsplash.com/photo-1557426272-b912f275e7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: '20 de Agosto, 2025',
    tags: ['Conteúdo', 'Marketing Digital', 'Conversão'],
    content: `
      <p>Conteúdo de qualidade é essencial, mas o conteúdo que converte é o que realmente impulsiona o crescimento do seu negócio. A chave é ir além da informação e criar uma conexão emocional com seu público, guiando-o suavemente pelo funil de vendas.</p>

      <h3>Como Escrever Conteúdo que Converte</h3>
      <ul>
        <li><strong>Conheça seu público:</strong> Entenda suas dores, desejos e desafios. O seu conteúdo deve oferecer soluções reais.</li>
        <li><strong>Foco em benefícios:</strong> Em vez de apenas listar recursos, mostre como seu produto ou serviço resolverá os problemas do seu cliente.</li>
        <li><strong>Use um storytelling:</strong> Conte uma história envolvente para criar uma conexão. As pessoas se lembram de histórias, não de listas de características.</li>
        <li><strong>Inclua um CTA (Call to Action) claro:</strong> Diga ao leitor exatamente o que fazer em seguida, seja "clique aqui", "compre agora" ou "inscreva-se".</li>
      </ul>

      <p>Criar conteúdo que converte é uma arte e uma ciência. Com um foco claro no seu público e em seus objetivos, você pode transformar simples palavras em vendas.</p>
    `
  },
  {
    id: 'analise-de-dados',
    title: 'O Poder da Análise de Dados para o seu Negócio',
    image: 'https://images.unsplash.com/photo-1551288049-629656be0784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: '15 de Agosto, 2025',
    tags: ['Análise de Dados', 'Consultoria', 'Negócios'],
    content: `
      <p>No mundo de hoje, a informação é poder. A análise de dados permite que as empresas tomem decisões informadas e estratégicas, em vez de dependerem de suposições. Ao coletar e analisar dados, você pode identificar padrões de comportamento do cliente, prever tendências do mercado e otimizar suas operações.</p>

      <h3>Benefícios da Análise de Dados</h3>
      <ul>
        <li><strong>Tomada de Decisão Melhorada:</strong> Baseie suas decisões em fatos e números, não em intuições.</li>
        <li><strong>Personalização Aprimorada:</strong> Entenda o que seus clientes querem e personalize suas ofertas.</li>
        <li><strong>Otimização de Processos:</strong> Identifique gargalos e ineficiências em seus processos internos para economizar tempo e dinheiro.</li>
        <li><strong>Inovação:</strong> Descubra novas oportunidades de mercado e crie produtos e serviços que seus clientes realmente precisam.</li>
      </ul>

      <p>Investir em análise de dados é investir no futuro do seu negócio, garantindo que você esteja sempre um passo à frente da concorrência.</p>
    `
  },
];

const Post = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div>Post não encontrado.</div>;
  }

  return (
    <div className="post-page-container">
      <MetaTags
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
      />
      
      <article className="blog-post">
        <header className="post-header">
          <img src={post.image} alt={post.title} className="post-image" />
          <div className="post-header-content">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="post-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="back-to-blog">
          <Link to="/blog">← Voltar para o Blog</Link>
        </div>
      </article>
    </div>
  );
};

export default Post;