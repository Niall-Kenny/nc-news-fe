import React from "react";
import { Link } from "@reach/router";

import "./Article-preview.styles.scss";

const ArticlePreview = ({
  author,
  title,
  created_at,
  votes,
  topic,
  article_id
}) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1554341662-f0f91d1eb2d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
  const style = {
    backgroundImage: `url(${imageUrl})`
  };
  return (
    <article className="preview-item">
      <div className="preview-card-header" style={style} />

      <div className="preview-card-body">
        <p className="preview-date">{created_at}</p>
        <Link to={`/feed/${article_id}`} className="preview-title-link">
          <h2>{title}</h2>
        </Link>
        <p>Topic: {topic}</p>
      </div>
      <div className="preview-card-footer">
        <Link to={`/user/${author}`}>
          <span className="author">By: {author}</span>
        </Link>
        <span className="votes">Votes: {votes}</span>
      </div>
    </article>
  );
};

export default ArticlePreview;
