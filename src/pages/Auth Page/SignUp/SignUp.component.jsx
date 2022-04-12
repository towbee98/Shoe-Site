import React from "react";
import { Link } from "react-router-dom";
import "../SignIn/sign-in.styles.css";
import FormInput from "../../../components/form-input/form-input.component";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import SubmitBtn from "../../../components/custom-button/custom-button.component";
import { ReactComponent as Logo } from "../../../assets/icons8-google.svg";
import {
  signInWithGoogle,
  auth,
  createUserWithEmailAndPassword,
  createUserProfileDocument,
} from "../../../firebase/firebase.utils";
import Message from "../../../components/server-message/message.component";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      passwordVisibility: false,
      passwordConfirmVisibility: false,
      errorMessage: "",
      error: false,
    };
  }
  handlePasswordVisibility = (e) => {
    e.preventDefault();
    this.setState({ passwordVisibility: !this.state.passwordVisibility });
  };
  handlePasswordConfirmVisiblity = (e) => {
    e.preventDefault();
    this.setState({
      passwordConfirmVisibility: !this.state.passwordConfirmVisibility,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, passwordConfirm } = this.state;
    if (password !== passwordConfirm)
      return alert("Passwords are not the same");
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await createUserProfileDocument(user, { name });

      this.setState({ name: "", email: "", password: "" });
    } catch (error) {
      console.log(error);
      this.setState({ errorMessage: error.message, error: true });
    }
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
        <h2>Sign up</h2>
        <span>Create an account</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            handleChange={this.handleChange}
            required
            label="Name"
          />
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
                type={this.state.passwordVisibility ? "text" : "password"}
                name="password"
                id="password"
                value={this.state.password}
                handleChange={this.handleChange}
                required
                label="Password"
              />
            </div>

            {this.state.passwordVisibility ? (
              <MdVisibility
                className="password-visibility"
                onClick={this.handlePasswordVisibility}
              />
            ) : (
              <MdVisibilityOff
                className="password-visibility"
                onClick={this.handlePasswordVisibility}
              />
            )}
          </div>
          <div className="password-container">
            <div>
              <FormInput
                type={
                  this.state.passwordConfirmVisibility ? "text" : "password"
                }
                name="passwordConfirm"
                id="password-confirm"
                value={this.state.passwordConfirm}
                handleChange={this.handleChange}
                required
                label="Confirm Password"
              />
            </div>
            {this.state.passwordConfirmVisibility ? (
              <MdVisibility
                className="password-visibility"
                onClick={this.handlePasswordConfirmVisiblity}
              />
            ) : (
              <MdVisibilityOff
                className="password-visibility"
                onClick={this.handlePasswordConfirmVisiblity}
              />
            )}
          </div>
          <SubmitBtn type="submit" onSubmit={this.handleSubmit}>
            Sign Up
          </SubmitBtn>
          <SubmitBtn type="submit" secondary onClick={signInWithGoogle}>
            <Logo /> <span>Sign Up with Google</span>
          </SubmitBtn>
          <Link className="go-to-sign-up" to={"/login"}>
            <span>Already have an account ? Click here to sign in</span>
          </Link>
        </form>
      </div>
    );
  }
}

export default SignUp;
