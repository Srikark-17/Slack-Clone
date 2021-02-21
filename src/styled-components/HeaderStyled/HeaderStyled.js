import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: #350e36;
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-right: 20px;
  z-index: -1;
  position: "absolute";
  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0px 50px;
  color: #808080;
  border: 1px solid #808080;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
  > svg {
    cursor: pointer;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;

  > svg {
    margin-left: 10px;
    margin-right: auto;
    cursor: pointer;
  }

  > div {
    display: "flex";
    flex-direction: "row";
    justify-content: "flex-end";
  }

  > div > svg {
    z-index: 999;
    right: 13px;
    position: absolute;
    top: 31px;
    color: #30ac76;
  }
`;

export { HeaderContainer, HeaderLeft, HeaderAvatar, HeaderSearch, HeaderRight };
