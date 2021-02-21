import React, { useState } from "react";
import { ChatInputContainer } from "../../../styled-components/ChatStyled/ChatInputStyled/ChatInputStyled";
import { Button } from "@material-ui/core";
import { db } from "../../../firebase";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Srikar Kusumanchi",
      userImage:
        "https://lh3.googleusercontent.com/-HMB64L8PFWM/AAAAAAAAAAI/AAAAAAAAB_I/AMZuucnVI3jKzWKR-inbU_lDzp4gup4joA/c/photo.jpg?height=180&width=180",
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
          type="text"
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
