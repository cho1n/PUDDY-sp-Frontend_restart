import { SignUpTemplate } from "../components/template/SignUpTemplate";
import { useSignUp } from "../hooks/useSignUp";

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
  );
};
