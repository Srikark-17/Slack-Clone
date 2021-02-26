import styled from "styled-components";

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > span {
    position: fixed;
    bottom: 30px;
    width: 83%;
    height: 8%;
    border: 1px solid #1d1c1d;
    border-radius: 4px;
    outline: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  > form > span > input {
    border: none;
    outline: none;
    margin-left: 5px;
    padding: 10px;
    margin-bottom: 3px;
  }
`;

const IconsContainer = styled.div`
  border-top: 1px solid rgba(29, 28, 29, 0.7);
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > button {
    align-self: flex-end;
    width: 30px;
    height: 30px;
    background-color: #00795c;
    border-radius: 2px;
    color: white;
    border: none;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 8px;
    transition: all 0.3s ease-in;
    margin-bottom: 3px;
  }
  > button > svg {
    width: 1rem;
    height: 1rem;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      border-radius: 5px;
      margin-right: 5px;
      margin-left: 5px;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.25s ease 0s;
      margin-top: 5px;
      color: rgba(29, 28, 29, 0.7);
      :hover {
        background-color: #d3d3d3;
        color: rgba(29, 28, 29, 1);
      }
    }
  }
`;

export { ChatInputContainer, IconsContainer };
