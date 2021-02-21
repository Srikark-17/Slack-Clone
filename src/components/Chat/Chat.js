import React from "react";
import {
  ChatContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  ChatMessages,
} from "../../styled-components/ChatStyled/ChatStyled";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../redux/appSlice";
import ChatInput from "./ChatInput/ChatInput";

const Chat = () => {
  const roomId = useSelector(selectRoomId);

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#room-name</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon />
              Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages></ChatMessages>
        <ChatInput channelId={roomId} />
      </>
    </ChatContainer>
  );
};

export default Chat;
