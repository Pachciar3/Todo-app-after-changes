import React from "react";

import Message from "../Message";
import './styles.scss';

function MessagesList({ messages, remove }) {
  const allMessages = messages && messages.map(message => <Message removeDelay="2000" handleRemove={() => remove(message.id)} key={message.id} type={message.type}>{message.text}</Message>)
  return (
    <div className="messages">
      {allMessages}
    </div>
  )
}

export default MessagesList