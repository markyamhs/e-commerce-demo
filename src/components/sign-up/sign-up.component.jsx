import React, { Component, useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.action";
import { connect } from "react-redux";

// class SignUp extends Component {
//   state = {
//     displayName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const { displayName, email, password, confirmPassword } = this.state;
//     if (password !== confirmPassword) {
//       alert("Password does not match with confirmed password!");
//       return;
//     }
//     try {
//       const userAuthparent = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       //the below 3 lines are to add username to database. Even without the below 3 lines,
//       //the user item will still be added to the database due to change in AuthState by the above 3 lines
//       //which triggers the listner onAuthStateChanged in App.js to fire--->call creatUserProfileDocument
//       await creatUserProfileDocument(userAuthparent.user, {
//         username: displayName,
//       });

//       this.setState({
//         displayName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   handleChange = (event) => {
//     event.preventDefault();
//     const { value, name } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { displayName, email, password, confirmPassword } = this.state;
//     return (
//       <div className="sign-up">
//         <h2 className="title">I do not have an account</h2>
//         <span>Sign up with your email and password</span>
//         <form onSubmit={this.handleSubmit} className="sign-up-form">
//           <FormInput
//             type="text"
//             name="displayName"
//             label="your name to display"
//             value={displayName}
//             handleChange={this.handleChange}
//             required
//           />
//           <FormInput
//             type="email"
//             name="email"
//             label="your email"
//             value={email}
//             handleChange={this.handleChange}
//             required
//           />
//           <FormInput
//             type="password"
//             name="password"
//             label="your password"
//             value={password}
//             handleChange={this.handleChange}
//             required
//           />
//           <FormInput
//             type="password"
//             name="confirmPassword"
//             label="confirm your password"
//             value={confirmPassword}
//             handleChange={this.handleChange}
//             required
//           />
//           <CustomButton type="submit">Sign up</CustomButton>
//         </form>
//       </div>
//     );
//   }
// }

// export default SignUp;

const SignUp = ({ signUp }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    signUp({ displayName, email, password, confirmPassword });

    // if (password !== confirmPassword) {
    //   alert("Password does not match with confirmed password!");
    //   return;
    // }
    // try {
    //   const userAuthparent = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   //the below 3 lines are to add username to database. Even without the below 3 lines,
    //   //the user item will still be added to the database due to change in AuthState by the above 3 lines
    //   //which triggers the listner onAuthStateChanged in App.js to fire--->call creatUserProfileDocument
    //   await creatUserProfileDocument(userAuthparent.user, {
    //     username: displayName,
    //   });

    //   setUserCredentials({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //   });
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          label="your name to display"
          value={displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="your email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="your password"
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="confirm your password"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signUp: ({ displayName, email, password, confirmPassword }) =>
    dispatch(signUpStart({ displayName, email, password, confirmPassword })),
});
export default connect(null, mapDispatchToProps)(SignUp);
