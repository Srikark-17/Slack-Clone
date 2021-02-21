import styled from "styled-components";

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #d3d3d3;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > svg {
    margin-left: 10px;
    font-size: 18px;
    cursor: pointer;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > svg {
    margin-right: 5px !important;
    font-size: 16px;
    cursor: pointer;
  }
`;

const ChatMessages = styled.div``;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

export {
  ChatContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  ChatMessages,
  ChatBottom,
};
