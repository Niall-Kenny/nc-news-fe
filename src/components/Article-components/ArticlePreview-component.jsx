import React from "react";

import "./Article-preview.styles.scss";

const ArticlePreview = ({ author, title, created_at, votes }) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1554341662-f0f91d1eb2d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
  const style = {
    backgroundImage: `url(${imageUrl})`
  };
  return (
    <article className="article-item">
      <div className="article-card-header" style={style} />

      <div className="article-card-body">
        <p className="article-date">{created_at}</p>
        <h2>{title}</h2>
      </div>
      <div className="article-card-footer">
        <span className="author">By: {author}</span>
        <span className="votes">Votes: {votes}</span>
      </div>
    </article>
  );
};

export default ArticlePreview;
