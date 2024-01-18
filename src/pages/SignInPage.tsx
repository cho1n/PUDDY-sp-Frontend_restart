import { useSignIn } from "../hooks";
import { SignInTemplate } from "../components/template";

export const SignInPage = () => {
  const { signInValue, handleSignInChange, handleSignIn, handleSignUp } =
    useSignIn();
  return (
    <SignInTemplate
      signInValue={signInValue}
      onChange={handleSignInChange}
      onClick={handleSignIn}
      onSignUp={handleSignUp}
    />
  );
};
