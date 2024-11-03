import React from "react";

import styles from "./style.module.css";
import MessageItem from "./MessageItem";

function MessageArea({ conversation }) {
  if (!conversation)
    return (
      <div className={styles.messagePlaceholder}>Select a conversation</div>
    );

  return (
    <div className={styles.conversation_message}>
      <div className={styles.conversation_messager_detail}>
        <h3 className={styles.conversationTitle}>{conversation.name}</h3>
        <div className={styles.icons}></div>
      </div>
      <div className={styles.messageArea}>
        {conversation.messages.map((msg, index) => (
          <MessageItem key={index} message={msg} conversation={conversation} />
        ))}
      </div>
      <div>
      <input
        type="text"
        placeholder="Your message..."
        className={styles.messageInput}
      />
        </div>
    </div>
  );
}

export default MessageArea;
