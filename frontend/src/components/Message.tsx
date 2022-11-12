import DOMPurify from "dompurify";
import React from "react";

const config = {
  ALLOWED_TAGS: ['b', '#text'],
  ADD_TAGS: ['i', '#text']
};
const Message = ({
  message,
}: {
  message: { title: string; body: string; imgUrl: string };
}) => {
  return (
    <div className="message">
      <div className="message-header">
        <div className="img-container">
          <img src={message.imgUrl} alt="Oh ohh,..." />
        </div>
        <h2>{message.title}</h2>
      </div>
      <div
        className="message-body"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(message.body, config),
        }}></div>
    </div>
  );
};

export default Message;
