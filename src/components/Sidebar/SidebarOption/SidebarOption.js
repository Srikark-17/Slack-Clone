import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { db } from "../../../firebase";
import { enterRoom } from "../../../redux/appSlice";
import {
  SidebarOptionContainer,
  SidebarOptionChannel,
} from "../../../styled-components/SidebarStyled/SidebarOptionStyled/SidebarOptionStyled";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();

  const addChannel = () => {
    Swal.fire({
      title: "Channel Name",
      text: "Enter the channel name",
      input: "text",
      showCancelButton: true,
    }).then((channelName) => {
      if (channelName.value) {
        db.collection("rooms").add({
          name: channelName.value,
        });
        Swal.fire(
          "Thank you!",
          `The channel ${channelName.value} is now created!`,
          "success"
        );
      }
    });
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
