import React from "react";

const ErrorMessage = ({
  message = "Oppps! looks like something went wrong!"
}) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorMessage;
