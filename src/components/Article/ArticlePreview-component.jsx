import React from "react";
import { Link } from "@reach/router";
import transformTitleLength from "../../utils/util";
import "./Article-preview.styles.scss";

import { Icon } from "@iconify/react";
import commentsIcon from "@iconify/icons-fa-solid/comments";
import clappingHands from "@iconify/icons-emojione-monotone/clapping-hands";

import image from "../../images/images";

const ArticlePreview = ({
  author,
  title,
  created_at,
  votes,
  topic,
  article_id,
  comment_count
}) => {
  const imageUrl = image[Math.floor(Math.random() * 15) + 1];
  const style = {
    backgroundImage: `url(${imageUrl})`
  };
  const datePosted = new Date(created_at).toLocaleDateString();
  const maxCharInTitle = 64;
  const newTitle = transformTitleLength(title, maxCharInTitle);

  return (
    <article className="preview-item">
      <div className="preview-card-header" style={style} />

      <div className="preview-card-body">
        <Link to={`/feed/${article_id}`} className="preview-title-link">
          <h2>{newTitle}</h2>
        </Link>
        <div className="topic-date">
          <Link to={`/topics/${topic}`}>
            <p>Topic: {topic}</p>
          </Link>
          <p className="preview-date">{datePosted}</p>
        </div>
      </div>
      <div className="preview-card-footer">
        <Link to={`/user/${author}`}>
          <span className="author">
            BY <b>{author.toUpperCase()}</b>
          </span>
        </Link>
        <span>
          <Icon className="icon" icon={commentsIcon} />
          <span className="number">{comment_count}</span>
          <Icon className="icon" icon={clappingHands} />
          <span className="number">{votes}</span>
        </span>
      </div>
    </article>
  );
};

export default ArticlePreview;
