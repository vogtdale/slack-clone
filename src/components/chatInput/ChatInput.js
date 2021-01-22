import "./ChatInput.css";

import firebase from "firebase";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectChannelId, selectChannelName } from "../../features/chatSlice";
import { selectUser } from "../../features/userSlice";
import db from "../../firebase";

const ChatInput = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);


  const sendMessages = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("")
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          disabled={!channelId}
        />
        <button type="submit" disabled={!channelId} onClick={sendMessages}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
