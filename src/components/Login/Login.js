import React from "react";
import {
  LoginContainer,
  LoginInnerContainer,
} from "../../styled-components/LoginStyled/LoginStyled";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="Slack Logo"
        />
        <div>
          <h1>Sign in to Srikar Kusumanchi</h1>
          <p>srikar.slack.com</p>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In With Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;
