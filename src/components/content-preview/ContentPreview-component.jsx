import React from "react";

const ContentPreview = ({ topic, description }) => {
  return (
    <span>
      <h3 key={topic} className={topic}>
        {topic}
      </h3>
      <h6>{description}</h6>
    </span>
  );
};

export default ContentPreview;
