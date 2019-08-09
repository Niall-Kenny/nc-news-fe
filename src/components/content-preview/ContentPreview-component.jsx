import React from "react";
import ArticlePreview from "../Article/ArticlePreview-component";
import "./content-preview.styles.scss";

const ContentPreview = ({ topic, description, articles }) => {
  console.log(articles);
  return (
    <div className="content-preview">
      <div className="content-topic">
        <h3 key={topic} className={topic}>
          {topic}
        </h3>
        <h6>{description}</h6>
      </div>
      <div className="content-list">
        {articles.map(article => (
          <ArticlePreview article={article} />
        ))}
      </div>
    </div>
  );
};

export default ContentPreview;
