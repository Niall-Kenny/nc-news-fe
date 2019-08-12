import React from "react";
import { Link } from "@reach/router";
import transformTitleLength from "../../utils/util";
import "./Article-preview.styles.scss";

import image from "../../images/images";

const ArticlePreview = ({
  author,
  title,
  created_at,
  votes,
  topic,
  article_id
}) => {
  const imageUrl = image[Math.floor(Math.random() * 15) + 1];
  const style = {
    backgroundImage: `url(${imageUrl})`
  };

  const maxCharInTitle = 64;
  const newTitle = transformTitleLength(title, maxCharInTitle);

  return (
    <article className="preview-item">
      <div className="preview-card-header" style={style} />

      <div className="preview-card-body">
        <p className="preview-date">{created_at}</p>
        <Link to={`/feed/${article_id}`} className="preview-title-link">
          <h2>{newTitle}</h2>
        </Link>
        <Link to={`/topics/${topic}`}>
          <p>Topic: {topic}</p>
        </Link>
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
