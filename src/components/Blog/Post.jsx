import React from 'react';
import MetaTags from '../../components/MetaTags/MetaTags';
import { useParams } from 'react-router-dom';
import './Post.css';

const blogPosts = [
  {
    id: 'primeiro-post-seo',
    title: 'Guia Completo de SEO para Iniciantes',
    content: '<p>Otimizar seu site para os motores de busca não é apenas uma boa prática, é uma necessidade no mundo digital de hoje. O SEO, ou Search Engine Optimization, é o conjunto de técnicas que visam posicionar seu site entre os primeiros resultados em plataformas como o Google.</p><p>Neste guia, vamos abordar os fundamentos do SEO, desde a pesquisa de palavras-chave até a otimização técnica do seu site. Prepare-se para aprender como atrair mais tráfego orgânico e gratuito para o seu negócio.</p>',
    image: 'https://via.placeholder.com/800x450?text=SEO',
    date: '10 de Setembro, 2025'
  },
  {
    id: 'tendencias-marketing-digital',
    title: '5 Tendências de Marketing Digital para 2025',
    content: '<p>O marketing digital está em constante evolução. Para se manter relevante, é fundamental estar atento às novas tendências. Em 2025, o foco está em personalização, inteligência artificial e vídeos curtos.</p><p>Exploramos essas e outras tendências neste artigo, com dicas práticas de como incorporá-las à sua estratégia de marketing.</p>',
    image: 'https://via.placeholder.com/800x450?text=Marketing',
    date: '05 de Setembro, 2025'
  },
  {
    id: 'web-design-responsivo',
    title: 'A Importância do Web Design Responsivo',
    content: '<p>Com o aumento do uso de smartphones e tablets, ter um site responsivo deixou de ser um diferencial e se tornou uma obrigação. Um design responsivo garante que seu site se adapte a qualquer tela, proporcionando uma experiência de usuário consistente e positiva.</p><p>Além de melhorar a usabilidade, o design responsivo também é um fator de ranqueamento no Google. Descubra como isso pode impactar seu site e sua estratégia de SEO.</p>',
    image: 'https://via.placeholder.com/800x450?text=Responsive+Design',
    date: '01 de Setembro, 2025'
  },
  {
    id: 'otimizacao-velocidade-site',
    title: 'Como Otimizar a Velocidade do Seu Site',
    content: '<p>Um site rápido melhora a experiência do usuário e o seu ranqueamento. Aprenda técnicas simples para otimizar a velocidade de carregamento.</p>',
    image: 'https://via.placeholder.com/800x450?text=Velocidade',
    date: '25 de Agosto, 2025'
  },
  {
    id: 'conteudo-que-converte',
    title: 'Criando Conteúdo que Converte Vendas',
    content: '<p>Não basta escrever. Seu conteúdo precisa gerar resultados. Descubra como criar textos que engajam e levam o cliente à ação.</p>',
    image: 'https://via.placeholder.com/800x450?text=Conteudo',
    date: '20 de Agosto, 2025'
  },
  {
    id: 'analise-de-dados',
    title: 'O Poder da Análise de Dados para o seu Negócio',
    content: '<p>Tome decisões mais inteligentes e baseadas em dados. Entenda como a análise de dados pode transformar sua empresa.</p>',
    image: 'https://via.placeholder.com/800x450?text=Analytics',
    date: '15 de Agosto, 2025'
  },
];


const Post = () => {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <div>Post não encontrado.</div>;
  }

  return (
    <div className="post-page-container">
      <MetaTags
        title={post.title}
        description={post.content.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...'} // Remove tags HTML e limita o tamanho
        keywords={`blog, ${post.title.toLowerCase().split(' ').join(', ')}`}
      />
      <header className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <span className="post-date">{post.date}</span>
      </header>
      <img src={post.image} alt={post.title} className="post-main-image" />
      <article className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Post;