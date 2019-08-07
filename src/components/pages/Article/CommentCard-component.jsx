import React from "react";

const CommentCard = ({
  comment_id,
  handleDelete,
  author,
  created_at,
  body,
  votes,
  username
}) => {
  let style;
  if (username !== author) {
    style = { display: "none" };
  }
  return (
    <div className="comment-card">
      <li>
        <h5>author: {author}</h5>
        <p>{created_at}</p>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <button className="edit-comment" style={style}>
          edit comment
        </button>
        <button
          className="delete-comment"
          style={style}
          onClick={() => handleDelete(comment_id)}
        >
          delete comment
        </button>
        <button>vote +1</button>
        <button>vote -1</button>
      </li>
    </div>
  );
};

export default CommentCard;
