import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const FullArticle = () => {
  const { articleId } = useParams();
  console.log('Article ID:', articleId);
  const [article, setArticle] = useState();

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
          console.log(`Failed to fetch article with ID: ${articleId}`);
        }
      } catch (error) {
        console.log(`Error fetching article with ID: ${articleId}`, error);
      }
    };
    fetchArticle();
  }, [articleId]);

  if (!article) {
    return <div>No article found.</div>;
  }

  return (
    <div className="full-article">
      <img src={article.imageUrl} alt={article.title} className="article-image" />
      <h1 className="article-title">{article.title}</h1>
      <p className="article-content">{article.content}</p>
      <p>Author: {article.author}</p>
      <p>Published: {article.published}</p>
      <p>Category: {article.category}</p>
    </div>
  );
};

export default FullArticle;