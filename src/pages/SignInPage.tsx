import { useSignIn } from "../hooks/useSignIn";
import { SignInTemplate } from "../components/template/SignInTemplate";

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
