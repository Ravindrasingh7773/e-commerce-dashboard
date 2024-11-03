import React from 'react';
import styles from './style.module.css';

function ConversationItem({ conversation, onSelect }) {
  return (
    <div className={styles.conversationItem} onClick={onSelect}>
      <img src={conversation.avatar} alt={conversation.name} className={styles.avatar} />
      <div className={styles.conversationDetails}>
        <h4 className={styles.name}>{conversation.name}</h4>
        <p className={styles.lastMessage}>{conversation.messages[0].text}</p>
      </div>
      {conversation.unreadCount > 0 && (
        <span className={styles.unreadCount}>{conversation.unreadCount}</span>
      )}
    </div>
  );
}

export default ConversationItem;
