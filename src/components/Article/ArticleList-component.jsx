import React from "react";
import ArticlePreview from "./ArticlePreview-component";

import "./articleList.styles.scss";

const ArticleList = ({ articles }) => {
  return (
    <div>
      <div className="feed-list">
        {articles.map(props => {
          return (
            <ArticlePreview
              key={props.article_id}
              {...props}
              article_id={props.article_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArticleList;
