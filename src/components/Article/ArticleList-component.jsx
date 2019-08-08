import React from "react";
import ArticlePreview from "./ArticlePreview-component";

import "./articleList.styles.scss";

const FeedList = ({ articles }) => {
  return (
    <div className="feed-list">
      <div className="feed-preview">
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

export default FeedList;
