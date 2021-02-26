import React, { useState } from "react";
import {
  ChatInputContainer,
  IconsContainer,
} from "../../../styled-components/ChatStyled/ChatInputStyled/ChatInputStyled";
import SendIcon from "@material-ui/icons/Send";
import { auth, db } from "../../../firebase";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import CodeIcon from "@material-ui/icons/Code";
import LinkIcon from "@material-ui/icons/Link";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
            type="text"
          />
          <IconsContainer>
            <div>
              <div>
                <FlashOnIcon />
              </div>
              <span>|</span>
              <div>
                <FormatBoldIcon />
              </div>
              <div>
                <FormatItalicIcon />
              </div>
              <div>
                <StrikethroughSIcon />
              </div>
              <div>
                <CodeIcon />
              </div>
              <div>
                <LinkIcon />
              </div>
              <div>
                <FormatListBulletedIcon />
              </div>
              <div>
                <FormatListNumberedIcon />
              </div>
            </div>
            {input ? (
              <button type="submit" onClick={sendMessage}>
                <SendIcon />
              </button>
            ) : (
              <button style={{ backgroundColor: "#f8f8f8" }}>
                <SendIcon
                  style={{
                    color: "#d9d9d9",
                  }}
                />
              </button>
            )}
          </IconsContainer>
        </span>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
