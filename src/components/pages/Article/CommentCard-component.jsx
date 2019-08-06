import React from "react";

const CommentCard = ({ author, created_at, body, votes }) => {
  return (
    <div className="comment-card">
      <li>
        <h5>author: {author}</h5>
        <p>{created_at}</p>
        <p>{body}</p>
        <p>Votes: {votes}</p>
        <button>edit comment</button>
        <button>delete comment</button>
      </li>
    </div>
  );
};

export default CommentCard;
