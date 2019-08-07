import React from "react";
import Voter from "../../voting/Voter-component";

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
