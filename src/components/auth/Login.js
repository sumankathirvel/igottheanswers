import React, { useState } from "react";
import "./Login.css";

import { auth, provider } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((e) => alert(e.message));
  };

  const registerSignIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
       
        </div>
        <div className="login__desc">
          <h1>I Got the Answer</h1>
          
          
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
            <div className="login__authOption">
             
              <span>Welcome..... share your answer and questions accross globle and gain your knowlege and live better..............</span>
            </div>
            <div className="login__authDesc">
            
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>REGISTER YOU ACCOUNT........</small>
              <button onClick={handleSignIn}>Login</button>
            </div >
            <button onClick={registerSignIn}>Register</button>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Login;
