import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import "./Chat.css";
import ChatInput from "../../components/chatInput/ChatInput";
import Messages from "../message/Messages";
import { useSelector } from "react-redux";
import firebase from "firebase";
import React, { useEffect, useState } from "react";

import { selectChannelId, selectChannelName } from "../../features/chatSlice";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-headerLeft">
          <h4 className="chat-channelName">
            <span># {channelName}</span>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat-headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <Messages
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
            key={message.user.uid}
          />
		))}

      </div>
      <ChatInput />
    </div>
  );
};

export default Chat;
