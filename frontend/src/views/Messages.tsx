import React from "react";
import Message from "../components/Message";
import { MessageType } from "../types";

const Messages = ({ messages }: { messages: MessageType[] }) => {
  return (
    <>
      <h2 className="sub-title">Messages</h2>
      {messages &&
        messages.map((message: MessageType) => (
          <Message key={message.id} message={message} />
        ))}
    </>
  );
};

export default Messages;
