import React from "react";
import ArticlePreview from "../../Article-components/ArticlePreview-component";

import "./feedlist.styles.scss";

const FeedList = ({ articles }) => {
  return (
    <div className="feed-list">
      <div className="feed-preview">
        {articles.map(props => {
          return <ArticlePreview key={props.article_id} {...props} />;
        })}
      </div>
    </div>
  );
};

export default FeedList;
