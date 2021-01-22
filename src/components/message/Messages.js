import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Message.css";

const Messages = ({ message, user, timestamp }) => {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message-info">
        <h4>
          {user.name}
          <span className="message-timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Messages;
