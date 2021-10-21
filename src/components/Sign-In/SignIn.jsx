import { FormInput, SubmitButton } from "components/Shared/Input/input.style";
import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Render a <SignIn> component
 *
 * @return {JSX.Element}
 */
const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <NavLink to="/SignUp">Need an account? </NavLink>
      <FormInput type="email" placeHolder="Email" name="email" id="email" />
      <FormInput
        type="password"
        placeHolder="Password"
        name="password"
        id="password"
      />
      <SubmitButton>Sign in</SubmitButton>
    </div>
  );
};

export default SignIn;
