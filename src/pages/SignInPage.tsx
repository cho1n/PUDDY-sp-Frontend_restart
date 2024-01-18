import { useSignIn } from "../hooks";
import { SignInTemplate } from "../components/template";
import { Layout } from "../components/common/layout/Layout";

export const SignInPage = () => {
  const { signInValue, handleSignInChange, handleSignIn, handleSignUp } =
    useSignIn();
  return (
    <Layout title={""} showHeader={false} showFooter={false}>
      <SignInTemplate
        signInValue={signInValue}
        onChange={handleSignInChange}
        onClick={handleSignIn}
        onSignUp={handleSignUp}
      />
    </Layout>
  );
};
