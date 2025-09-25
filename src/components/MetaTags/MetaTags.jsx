import React from 'react';
import { Helmet } from 'react-helmet'; // Precisamos instalar essa biblioteca

const MetaTags = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* Adicione outras meta tags como og:image, twitter:card, etc., se necessário */}
    </Helmet>
  );
};

export default MetaTags;