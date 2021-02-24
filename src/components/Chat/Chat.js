import React, { useEffect, useRef } from "react";
import {
  ChatContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  ChatBottom,
  ChatTopic,
  ChatTopicDisabled,
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

const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const channelTopic = roomDetails?.data().channelTopic;

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
      if (topic.value) {
        db.collection("rooms").doc(roomId).set(
          {
            channelTopic: topic.value,
          },
          { merge: true }
        );
      }
    });
  };

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
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
              {channelTopic ? (
                <ChatTopicDisabled>
                  {truncate(channelTopic, 60)}
                </ChatTopicDisabled>
              ) : (
                <ChatTopic onClick={addTopic}>Add a topic</ChatTopic>
              )}
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
