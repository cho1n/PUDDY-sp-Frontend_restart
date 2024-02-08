import { Button } from "../common/Button";
import { InputBox } from "../common/Input";
import { SignInInputType } from "../../types/sign";
import { logo } from "../../assets/Logo";
interface SignInTemplateProps {
  signInValue: SignInInputType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onSignUp: () => void;
}

export const SignInTemplate = (props: SignInTemplateProps) => {
  return (
    <div className="flex flex-col items-center w-f h-donHave bg-bgYellow">
      <img src={logo} className="w-64 h-64 mt-52" alt="logo" />
      <InputBox
        style={"bg-bgWhite text-fontBlack text-font14 mt-24"}
        placeholder={"아이디를 입력해주세요."}
        type={"text"}
        value={props.signInValue.login}
        name={"login"}
        onChange={props.onChange}
      />
      <InputBox
        style={"bg-bgWhite mt-2.5 text-fontBlack text-font14"}
        placeholder={"비밀번호를 입력해주세요."}
        type={"password"}
        value={props.signInValue.password}
        name={"password"}
        onChange={props.onChange}
      />
      <div className="flex flex-row w-64 h-12 mt-2.5">
        <Button
          style={"bg-bgWhite text-fontBlack text-buttonFont w-28 h-f basis-1/2"}
          text={"로그인"}
          onClick={props.onClick}
        />
        <Button
          style={
            "bg-bgBlack text-fontWhite text-buttonFont w-28 h-f ml-2.5 basis-1/2"
          }
          text={"회원가입"}
          onClick={props.onSignUp}
        />
      </div>
      <div className="flex flex-row mt-2.5">
        <p className="text-fontBlack">계정이 기억나지 않나요?</p>
        <p className="text-fontBlack ml-2 stroke-black">계정 찾기</p>
      </div>
    </div>
  );
};
