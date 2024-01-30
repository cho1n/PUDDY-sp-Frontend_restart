import { useState } from "react";
import { SignInInputType } from "../types/sign";
import { SignIn } from "../apis/SignApi";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const navigate = useNavigate();
  const [signInValue, setSignInValue] = useState<SignInInputType>({
    login: "",
    password: "",
  });
  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInValue({
      ...signInValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignIn = () => {
    SignIn(signInValue)
      .then((res) => {
        const accessToken = res.headers["authorization"] as string;
        const refreshToken = res.headers["reauthorization"] as string;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/match");
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        } else if (err.response.status === 400) {
          alert("이미 로그인 중입니다.");
        }
        console.log(err);
      });
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  return { signInValue, handleSignInChange, handleSignIn, handleSignUp };
};
