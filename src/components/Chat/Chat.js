import React, { useEffect, useRef } from "react";
import {
  ChatContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  ChatBottom,
} from "../../styled-components/ChatStyled/ChatStyled";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../redux/appSlice";
import ChatInput from "./ChatInput/ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Message from "./Message/Message";
import Swal from "sweetalert2";

// if there's no topic from firestore
// allow user to add topic for the channel
// else it shouldn't be editable

const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  const addTopic = () => {
    Swal.fire({
      title: "Channel Topic",
      text: "Enter the topic of this channel",
      input: "text",
      showCancelButton: true,
    }).then((topic) => {
      console.log(topic.value);
    });
  };

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
                <StarBorderOutlinedIcon />
              </h4>
              <div onClick={addTopic}>Add a topic</div>
            </HeaderLeft>
            <HeaderRight>
              <p>
                <div>
                  <PersonAddOutlinedIcon />
                  <InfoOutlinedIcon />
                </div>
              </p>
            </HeaderRight>
          </Header>
          <div>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </div>
          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;
