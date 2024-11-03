import React from 'react'; 
import styles from './style.module.css'; 
import ConversationItem from './conversationItem';
function ConversationList({ conversations, onSelectConversation }) {
  return (
    <div className={styles.conversation_wrraper}>
      <input type="text" placeholder="Search..." className={styles.searchInput} />
      <div  className={styles.conversationList}>
      {conversations.map(conversation => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
          onSelect={() => onSelectConversation(conversation)}
        />
      ))}
      </div>
    </div>
  );
}

export default ConversationList;
