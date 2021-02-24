import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #350e36;
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > svg {
    margin-left: auto;
    margin-right: 10px;
    cursor: pointer;
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
    width: 1.7rem;
    margin-right: 20px;
    padding-top: 7px;
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }

  > div > img {
    margin-right: 20px;
    z-index: -1;
    margin-bottom: 4px;
    height: 26px;
    width: 26px;
    cursor: pointer;
    border-radius: 4px;
    :hover {
      opacity: 0.8;
    }
  }

  > div > svg {
    z-index: 999;
    right: 1rem;
    position: absolute;
    top: 1.5rem;
    color: #2bac76;
    width: 1rem !important;
    height: 1rem !important;
  }
`;

export { HeaderContainer, HeaderLeft, HeaderSearch, HeaderRight };
