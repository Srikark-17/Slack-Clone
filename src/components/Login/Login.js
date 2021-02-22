import React, { useRef, useState } from "react";
import {
  LoginContainer,
  LoginInnerContainer,
  LoginFormContainer,
  LoginInnerOptionContainer,
} from "../../styled-components/LoginStyled/LoginStyled";
import { auth, provider } from "../../firebase";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [name, setName] = useState();

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((error) => alert(error.message));
  };

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() =>
        auth.onAuthStateChanged((userAuth) => {
          if (userAuth) {
            userAuth.updateProfile({
              displayName: name,
              photoURL:
                "https://modrika.com/wp-content/uploads/avatars/1560/1560-bpfull.jpg",
            });
          }
        })
      )
      .catch((error) => alert(error.message));
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png"
          alt="Slack Logo"
        />
        <h1>Sign in to Srikar Kusumanchi</h1>
        <LoginInnerOptionContainer>
          Continue with the Google account or email address you use to sign in.
        </LoginInnerOptionContainer>
        <button onClick={googleSignIn}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <g>
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              ></path>
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              ></path>
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              ></path>
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              ></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </g>
          </svg>
          <span>Sign in with Google</span>
        </button>
        <div>
          <hr />
          <strong>OR</strong>
          <div>
            <hr />
          </div>
        </div>
        <LoginFormContainer>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button onClick={login}>Sign In</button>
        </LoginFormContainer>
        <h4>
          New to Slack? <span onClick={signup}>Create an account</span>
        </h4>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;
