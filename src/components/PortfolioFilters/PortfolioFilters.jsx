import React from 'react';
import './PortfolioFilters.css';

const PortfolioFilters = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <section className="portfolio-filters">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </section>
  );
};

export default PortfolioFilters;