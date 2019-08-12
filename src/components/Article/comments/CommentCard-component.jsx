import React from "react";
import Voter from "../../voting/Voter-component";

const CommentCard = ({
  comment_id,
  handleDelete,
  author,
  created_at,
  body,
  votes,
  loggedIN
}) => {
  let style;
  if (loggedIN !== author) {
    style = { display: "none" };
  }
  const datePosted = new Date(created_at).toLocaleDateString();
  return (
    <div className="comment-card">
      <li>
        <h5>author: {author}</h5>
        <p>{datePosted}</p>
        <p>{body}</p>
        <Voter comment_id={comment_id} endpoint="comments" votes={votes} />

        <button
          className="delete-comment"
          style={style}
          onClick={() => handleDelete(comment_id)}
        >
          delete comment
        </button>
      </li>
    </div>
  );
};

export default CommentCard;
