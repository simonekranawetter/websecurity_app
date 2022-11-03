import React from "react"
const Message = ({
  message,
}: {
  message: { title: string; body: string; imgUrl: string };
}) => {
  return (
    <div className="message">
      <div className="message-header">
        <div className="img-container">
          <img src={message.imgUrl} alt="beautiful blog post illustration" />
        </div>
        <h2>{message.title}</h2>
      </div>
      <div className="message-body">{message.body}</div>
    </div>
  );
};

export default Message;
