import { Layout } from "../components/common/layout/Layout";
import { SignUpTemplate } from "../components/template";
import { useSignUp } from "../hooks";

export const SignUpPage = () => {
  const {
    signUpValue,
    isSameLogin,
    checkPassword,
    dateValue,
    handleSignUpChange,
    handleCheckPassword,
    handleSignUpSelect,
    handleGenderCheck,
    handleSignUp,
    handleCheckLogin,
    handleCheckAddress,
  } = useSignUp();
  return (
    <Layout title={"회원가입"} showHeader={true} showFooter={false}>
      <SignUpTemplate
        signUpValue={signUpValue}
        isSameLogin={isSameLogin}
        checkPassword={checkPassword}
        dateValue={dateValue}
        onChange={handleSignUpChange}
        onPasswordCheck={handleCheckPassword}
        onSelect={handleSignUpSelect}
        onGenderCheck={handleGenderCheck}
        onClick={handleSignUp}
        onLoginCheck={handleCheckLogin}
        onAddressCheck={handleCheckAddress}
      />
    </Layout>
  );
};
