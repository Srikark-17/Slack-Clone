import styled from "styled-components";

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 45px;
    margin-bottom: 30px;
  }
  > button {
    width: 50%;
    max-width: 50%;
    background-color: #fff;
    border: 2px solid #4285f4;
    color: #4285f4;
    font-size: 18px;
    font-weight: 700;
    height: 44px;
    min-width: 96px;
    display: flex;
    padding: 0;
    text-decoration: none;
    transition: all 80ms linear;
    box-shadow: none;
    border-radius: 4px;
    align-items: center;
    position: relative;
    justify-content: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    cursor: pointer;
  }
  > button > svg {
    margin-right: 12px;
    width: 18px;
    height: 18px;
  }
  > div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
  }
  > div > strong {
    color: #868686;
    margin-right: 0;
    margin-left: 0;
  }
  > div > hr {
    flex-grow: 1;
    margin: 0;
    border: none;
    border-top: 1px solid #ddd;
    clear: both;
    padding: 0;
    position: absolute;
    width: 15rem;
  }
  > div > div {
    align-self: flex-end;
    position: absolute;
    width: 15rem;
  }
  > div > div > hr {
    margin: 0;
    border: none;
    border-top: 1px solid #ddd;
    clear: both;
    padding: 0;
  }
  > h4 {
    color: #616061;
  }
  > h4 > span {
    font-weight: 700;
    color: #1264a3;
    text-decoration: none;
    cursor: pointer;
  }
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 20px;
  > input {
    padding: 11px 12px 13px;
    height: 44px;
    font-size: 18px;
    line-height: 1.33333333;
    border-radius: 4px;
    border: 1px solid #868686;
    transition: border 80ms ease-out, box-shadow 80ms ease-out;
    box-sizing: border-box;
    margin: 0 0 20px;
    width: 140%;
    align-self: center;
  }
  > button {
    color: #fff;
    background-color: #4a154b;
    border: none;
    font-size: 18px;
    font-weight: 800;
    height: 44px;
    padding: 0 16px 3px;
    margin-bottom: 10px;
    width: 140%;
    border-radius: 4px;
    align-self: center;
    cursor: pointer;
  }
`;

const LoginInnerOptionContainer = styled.span`
  font-size: 18px;
  color: #454245;
  max-width: 700px;
  text-align: center;
`;

export {
  LoginContainer,
  LoginInnerContainer,
  LoginFormContainer,
  LoginInnerOptionContainer,
};
