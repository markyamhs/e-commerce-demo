import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { firebaseGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSummit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSummit} className="sign-in">
        <h2>I already have an account</h2>
        <span className="subtitle">Sign in with your email and password</span>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={this.state.email}
          handleChange={this.handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={this.state.password}
          handleChange={this.handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={firebaseGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    );
  }
}

export default SignIn;
