import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

// class SignIn extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   handleChange = (event) => {
//     event.preventDefault();
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };
//   handleSummit = async (event) => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//     } catch (error) {
//       alert(error.message);
//     }
//     this.setState({
//       email: "",
//       password: "",
//     });
//   };

//   render() {
//     return (
//       <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>
//         <form onSubmit={this.handleSummit}>
//           <FormInput
//             name="email"
//             type="email"
//             label="email"
//             value={this.state.email}
//             handleChange={this.handleChange}
//             required
//           />
//           <FormInput
//             name="password"
//             type="password"
//             label="password"
//             value={this.state.password}
//             handleChange={this.handleChange}
//             required
//           />
//           <div className="buttons">
//             <CustomButton type="submit">Sign in</CustomButton>
//             <CustomButton onClick={firebaseGoogle} isGoogleSignIn>
//               Sign in with Google
//             </CustomButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SignIn;

//implementing hooks below
const SignIn = ({ googleSignIn, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const handleSummit = (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
    setUserCredentials({
      email: "",
      password: "",
    });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSummit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignIn: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
