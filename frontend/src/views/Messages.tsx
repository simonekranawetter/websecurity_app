import React from "react";
import Message from "../components/Message";

const Messages = ({
  messages,
}: {
  messages: { id: string; title: string; body: string; imgUrl: string }[];
}) => {
  return (
    <>
      <h2 className="sub-title">Messages</h2>
      {messages &&
        messages.map((message : { id: string; title: string; body: string; imgUrl: string }) => (
          <Message key={message.id} message={message} />
        ))}
    </>
  );
};

export default Messages;
