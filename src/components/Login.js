import React from "react";
import "../css/Login.css";
import { Field, reduxForm } from "redux-form";

const renderTextField = ({ input, meta, ...rest }) => {
  return <input {...input} {...rest} />;
};

class Login extends React.Component {
  render() {
    return (
      <div className="main">
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="form1">
          <Field
            className="un"
            type="text"
            align="center"
            placeholder="Username"
            name="username"
            component={renderTextField}
          />

          <Field
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
            name="password"
            component={renderTextField}
          />
          <button className="submit" align="center">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "Login"
})(Login);
