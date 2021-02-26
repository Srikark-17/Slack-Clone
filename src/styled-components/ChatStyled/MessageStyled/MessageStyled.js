import styled from "styled-components";

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: -1;
  margin-top: 5px;
  padding: 15px 20px 15px 20px;
  > img {
    height: 50px;
    border-radius: 8px;
  }
  :hover {
    background-color: #f8f8f8;
    cursor: pointer;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: #808080;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;

export { MessageContainer, MessageInfo };
