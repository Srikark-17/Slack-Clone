import styled from "styled-components";

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 55px;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  justify-content: space-between;
  padding: 0px 10px 7px 20px;
  border-bottom: 1px solid #d3d3d3;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
    cursor: default;
    margin-bottom: 5px;
  }
  > h4 > svg {
    margin-left: 10px;
    font-size: 18px;
    cursor: pointer;
    color: #1d1c1d !important;
    opacity: 0.7 !important;
  }
`;

const ChatTopic = styled.h5`
  font-size: 13px;
  color: #1d1c1d;
  font-weight: 400;
  :hover {
    color: #0645ad;
    cursor: pointer;
  }
`;

const ChatTopicDisabled = styled.h5`
  font-size: 13px;
  color: #1d1c1d;
  font-weight: 400;
  cursor: default;
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
  }

  > p > div > svg {
    margin-right: 40px !important;
    font-size: 24px;
    cursor: pointer;
    color: #1d1c1d !important;
    opacity: 0.7 !important;
  }
`;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

export {
  ChatContainer,
  Header,
  HeaderLeft,
  HeaderRight,
  ChatTopic,
  ChatTopicDisabled,
  ChatBottom,
};
