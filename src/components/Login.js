import React from "react";
import "../css/Login.css";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../actions/authAction";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div style={{ color: "red", textAlign: "center", marginBottom: "25px" }}>
        {error}
      </div>
    );
  }
};
const renderTextField = ({ input, meta, ...rest }) => {
  return (
    <React.Fragment>
      <input {...input} {...rest} />
      {renderError(meta)}
    </React.Fragment>
  );
};

class Login extends React.Component {
  onSubmitForm = formValues => {
    this.props.login(formValues);
  };
  render() {
    return (
      <div className="main">
        <p className="sign" align="center">
          Sign in
        </p>

        <div style={{ color: "red", textAlign: "center" }}>
          {this.props.error}
        </div>
        <form
          className="form1"
          onSubmit={this.props.handleSubmit(this.onSubmitForm)}
        >
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
          <button
            className="submit"
            align="center"
            disabled={this.props.submitting}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

// Validate function to apply client side validation
const validate = formValues => {
  const errors = {};
  if (!formValues.username) {
    errors.username = "Username is required";
  }
  if (!formValues.password) {
    errors.password = "Password is required";
  }
  return errors;
};

const LoginForm = reduxForm({
  form: "Login", //==> Given the name to the form
  validate //==> Inject validate method
})(Login);

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);
