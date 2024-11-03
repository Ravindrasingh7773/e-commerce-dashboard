import React, { useState, useEffect } from 'react';
import ConversationList from './conversationList';
import MessageArea from './messageArea';
import conversationsData from '../../data/conversation.json';
import styles from './style.module.css';
import MainDashboardHeading from '../mainDashboardHeding';

function Inbox() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    // Set conversations and select the first conversation on initial render
    setConversations(conversationsData);
    setSelectedConversation(conversationsData[0]);
  }, []);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className={styles.inboxContainer}>
      <MainDashboardHeading
        title={"Inbox"}
        fillBtn={true} 
        icon={true}
        fillTitle={"New Message"}
      />
      <div className={styles.inbox_wrraper}>
        
      <ConversationList
        conversations={conversations}
        onSelectConversation={handleSelectConversation}
      />
      <MessageArea conversation={selectedConversation} />
      </div>
    </div>
  );
}

export default Inbox;
