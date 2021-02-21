import React from "react";
import {
  MessageContainer,
  MessageInfo,
} from "../../../styled-components/ChatStyled/MessageStyled/MessageStyled";

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt="User profile pic" />
      <MessageInfo>
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;
