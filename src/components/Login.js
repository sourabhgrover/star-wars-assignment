import React from "react";
import "../css/Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="main">
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="form1">
          <input
            className="un "
            type="text"
            align="center"
            placeholder="Username"
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
          />
          <button className="submit" align="center">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
