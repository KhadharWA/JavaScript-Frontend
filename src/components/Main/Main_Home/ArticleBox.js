import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Article = ({ articleId, isSpecial }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleId}`, {
          method: 'GET'
        });
        if (response.ok) {
          const data = await response.json();
          setArticle(data);
        } else {
          console.error(`Failed to fetch article with ID: ${articleId}`);
        }
      } catch (error) {
        console.error(`Error fetching article with ID: ${articleId}`, error);
      }
    };
    fetchArticle();
  }, [articleId]);

  if (!article) {
    return <div>No article found.</div>;
  }

  return (
    <NavLink to={`/articles/${articleId}`} className="News">
      <article className={isSpecial ? "special-article" : ""}>
        <img src={article.imageUrl} alt={article.title} className="article-image" />
        <p>{article.category}</p>
        <h3 className="article-title">{article.title}</h3>
        <p>{article.content}</p>
      </article>
    </NavLink>
  );
};

export default Article;