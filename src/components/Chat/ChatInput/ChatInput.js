import React, { useRef } from "react";
import { ChatInputContainer } from "../../../styled-components/ChatStyled/ChatInputStyled/ChatInputStyled";
import { Button } from "@material-ui/core";
import { db } from "../../../firebase";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId }) => {
  const inputRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();

    console.log(channelId);

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Srikar Kusumanchi",
      userImage:
        "https://lh3.googleusercontent.com/-HMB64L8PFWM/AAAAAAAAAAI/AAAAAAAAB_I/AMZuucnVI3jKzWKR-inbU_lDzp4gup4joA/c/photo.jpg?height=180&width=180",
    });
  };

  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder={`Message #ROOM`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
