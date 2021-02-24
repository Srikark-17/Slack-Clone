import React from "react";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderSearch,
  HeaderRight,
} from "../../styled-components/HeaderStyled/HeaderStyled";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search Srikar Kusumanchi" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
        <div onClick={() => auth.signOut()}>
          <img src={user?.photoURL} alt={user?.displayName} />
          <FiberManualRecordIcon />
        </div>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
