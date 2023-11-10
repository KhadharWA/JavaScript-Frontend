
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ArticleList = ({ articleId, date, month }) => {
  const [article, setArticle] = useState(null);
  

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleId}`, {
          method: 'GET'
        });
        if (result.status === 200) {
          const data = await result.json();
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
    <NavLink to={`/articles/${articleId}`} className="News-Article">
    <article className="News-text">
        <img src={article.imageUrl} alt={article.title} className="article-image" />
        <p>{article.category}</p>
        <h3>{article.title}</h3>
        <p>{article.content}</p>
        <div className="date-box">
            <h4>{date}</h4>
            <p>{month}</p>
        </div>
    </article>
  </NavLink>
  );
};

export default ArticleList;


