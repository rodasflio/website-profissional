import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogTags from './BlogTags/BlogTags'; // Importa o novo componente
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 'primeiro-post-seo',
      title: 'Guia Completo de SEO para Iniciantes',
      excerpt: 'Descubra como otimizar seu site para os motores de busca e atrair mais tráfego orgânico com este guia passo a passo.',
      image: 'https://via.placeholder.com/600x350?text=SEO',
      date: '10 de Setembro, 2025',
      tags: ['SEO', 'Marketing Digital', 'Guia']
    },
    {
      id: 'tendencias-marketing-digital',
      title: '5 Tendências de Marketing Digital para 2025',
      excerpt: 'Fique por dentro das últimas tendências que moldarão o futuro do marketing digital e aprenda a aplicá-las em sua estratégia.',
      image: 'https://via.placeholder.com/600x350?text=Marketing',
      date: '05 de Setembro, 2025',
      tags: ['Marketing Digital', 'Tendências', 'Inovação']
    },
    {
      id: 'web-design-responsivo',
      title: 'A Importância do Web Design Responsivo',
      excerpt: 'Entenda por que ter um site que se adapta a todos os dispositivos é crucial para a experiência do usuário e para o ranqueamento no Google.',
      image: 'https://via.placeholder.com/600x350?text=Responsive+Design',
      date: '01 de Setembro, 2025',
      tags: ['Web Design', 'Desenvolvimento Web', 'SEO']
    },
    {
      id: 'otimizacao-velocidade-site',
      title: 'Como Otimizar a Velocidade do Seu Site',
      excerpt: 'Um site rápido melhora a experiência do usuário e o seu ranqueamento. Aprenda técnicas simples para otimizar a velocidade de carregamento.',
      image: 'https://via.placeholder.com/600x350?text=Velocidade',
      date: '25 de Agosto, 2025',
      tags: ['Performance', 'Desenvolvimento Web', 'Otimização']
    },
    {
      id: 'conteudo-que-converte',
      title: 'Criando Conteúdo que Converte Vendas',
      excerpt: 'Não basta escrever. Seu conteúdo precisa gerar resultados. Descubra como criar textos que engajam e levam o cliente à ação.',
      image: 'https://via.placeholder.com/600x350?text=Conteudo',
      date: '20 de Agosto, 2025',
      tags: ['Conteúdo', 'Marketing Digital', 'Conversão']
    },
    {
      id: 'analise-de-dados',
      title: 'O Poder da Análise de Dados para o seu Negócio',
      excerpt: 'Tome decisões mais inteligentes e baseadas em dados. Entenda como a análise de dados pode transformar sua empresa.',
      image: 'https://via.placeholder.com/600x350?text=Analytics',
      date: '15 de Agosto, 2025',
      tags: ['Análise de Dados', 'Consultoria', 'Negócios']
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState('Todos');
  const postsPerPage = 3;

  const allTags = ['Todos', ...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearchTerm = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'Todos' || post.tags.includes(selectedTag);
    return matchesSearchTerm && matchesTag;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  
  const handleTagClick = (tag) => {
      setSelectedTag(tag);
      setSearchTerm('');
      setCurrentPage(1);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blog-page-container">
      <header className="blog-header">
        <h1 className="blog-title">Nosso Blog</h1>
        <p className="blog-intro">Acompanhe as últimas notícias, dicas e tendências do mundo da tecnologia e do marketing digital.</p>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Buscar por posts..." 
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <BlogTags 
            tags={allTags}
            selectedTag={selectedTag}
            onTagClick={handleTagClick}
        />
      </header>

      <section className="blog-posts-grid">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <article className="blog-post-card" key={post.id}>
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-info">
                <span className="post-date">{post.date}</span>
                <h2 className="post-title">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag-item">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="no-results">Nenhum post encontrado para sua busca ou tag.</p>
        )}
      </section>

      {filteredPosts.length > postsPerPage && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;