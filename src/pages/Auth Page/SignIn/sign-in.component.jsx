import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/icons8-google.svg";
import {
  signInWithGoogle,
  LoginWithUserCredentials,
} from "../../../firebase/firebase.utils";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import "./sign-in.styles.css";
import FormInput from "../../../components/form-input/form-input.component";
import SubmitBtn from "../../../components/custom-button/custom-button.component";
import Message from "../../../components/server-message/message.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordVisibilty: false,
      error: false,
      errorMessage: "",
    };
  }
  handlePasswordVisibilty = (e) => {
    e.preventDefault();
    this.setState({ passwordVisibilty: !this.state.passwordVisibilty });
  };

  // handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  handleSubmit = async (event) => {
    event.preventDefault();
    const result = await LoginWithUserCredentials(this.state);
    result.name === "FirebaseError"
      ? this.setState({
          email: "",
          password: "",
          errorMessage: `${result.message}`,
          error: !this.state.error,
        })
      : this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        {this.state.error ? (
          <Message
            errorMessage={this.state.errorMessage}
            error={this.state.error}
          />
        ) : null}
        <h2>Sign In</h2>
        <span>You have an existing account</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />
          <div className="password-container">
            <div>
              <FormInput
                type={this.state.passwordVisibilty ? "text" : "password"}
                name="password"
                id="password"
                value={this.state.password}
                handleChange={this.handleChange}
                required
                label="Password"
              />
            </div>
            {this.state.passwordVisibilty ? (
              <MdVisibility
                className="password-visibility"
                onClick={this.handlePasswordVisibilty}
              />
            ) : (
              <MdVisibilityOff
                className="password-visibility"
                onClick={this.handlePasswordVisibilty}
              />
            )}
          </div>
          <div className="others">
            <div className="remember">
              <input
                type="checkbox"
                name="remember"
                id="remember-me"
                value={"Remember"}
              />
              <label htmlFor="Remember Me">Remember me</label>
            </div>
            <Link className="forget-password" to={"/forgetPassword"}>
              <span>Forget Password?</span>
            </Link>
          </div>
          <br />
          <SubmitBtn type="submit" onSubmit={this.handleSubmit}>
            Sign in
          </SubmitBtn>
          <SubmitBtn
            type="submit"
            secondary
            onClick={() => {
              signInWithGoogle(this.state);
            }}
          >
            <Logo /> <span>Sign in with Google</span>
          </SubmitBtn>
          <Link className="go-to-sign-up" to={"/signUp"}>
            <span>Don't have an account ? Click here to sign up</span>
          </Link>
        </form>
      </div>
    );
  }
}

export default SignIn;
