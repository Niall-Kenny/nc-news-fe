import React from "react";
import ArticlePreview from "../Article/ArticlePreview-component";
import "./content-preview.styles.scss";
import { Link } from "@reach/router";

const ContentPreview = ({ topic, description, articles }) => {
  return (
    <div className="content-preview">
      <div className="content-topic">
        <Link to={`/topics/${topic}`}>
          <p>
            <span key={topic} className="topic-title">
              {topic.toUpperCase()}
            </span>
            <span className="topic-description">{description}</span>
          </p>
        </Link>
      </div>

      <div className="content-list">
        {articles.map(article => {
          return (
            <ArticlePreview
              key={article.article_id}
              article_id={article.article_id}
              {...article}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContentPreview;
