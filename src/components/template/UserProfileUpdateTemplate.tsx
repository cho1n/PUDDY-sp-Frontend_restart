import { InputBox } from "../common/Input/InputBox";
import { SignUpMiddleTitle, SignUpCheckText } from "../common/Text";
import { Button } from "../common/Button/Button";
import { SelectDay, SelectMonth, SelectYear } from "../common/SelectBox";
import { GenderRadio } from "../common/Radio";
import { UpdateProfileInputType } from "../../types/update";
import { DateType } from "../../types/date";

interface UseRProfileUpdateProps {
  UpdateValue: UpdateProfileInputType;
  checkPassword: string;
  dateValue: DateType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onGenderCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onAddressCheck: () => void;
}

export const UserProfileUpdateTemplate = (props: UseRProfileUpdateProps) => (
  <div className="flex flex-col w-full px-4">
    <SignUpMiddleTitle text={"아이디"} />
    <div className="flex flex-row w-f justify-stretch">
      <InputBox
        style={"bg-bGray text-fontGray text-default"}
        placeholder={"아이디를 입력해주세요."}
        type={"text"}
        name={"login"}
        value={props.UpdateValue.login}
        onChange={() => {}}
      />
    </div>
    <SignUpCheckText color={""} text={""} />
    <SignUpMiddleTitle text={"비밀번호"} />
    <InputBox
      style={"bg-bGray text-fontBlack text-default"}
      placeholder={"비밀번호를 입력해주세요."}
      type={"password"}
      value={props.UpdateValue.password}
      name={"password"}
      onChange={props.onChange}
    />
    <InputBox
      style={"bg-bGray mt-2.5 text-fontBlack text-default"}
      placeholder={"비밀번호 확인"}
      type={"password"}
      value={props.checkPassword}
      name={"checkPassword"}
      onChange={props.onPasswordCheck}
    />
    {props.UpdateValue.password == "" && props.checkPassword == "" && (
      <SignUpCheckText color={""} text={""} />
    )}

    {props.checkPassword === props.UpdateValue.password &&
      props.UpdateValue.password != "" && (
        <SignUpCheckText
          color={"text-fontGreen"}
          text={"비밀번호가 일치합니다."}
        />
      )}
    {props.checkPassword !== props.UpdateValue.password &&
      props.UpdateValue.password != "" && (
        <SignUpCheckText
          color={"text-fontRed"}
          text={"비밀번호가 일치하지 않습니다."}
        />
      )}
    <SignUpMiddleTitle text={"생년월일"} />
    <div className="flex flex-row w-64 h-9">
      <SelectYear year={props.dateValue.year} onChange={props.onSelect} />
      <SelectMonth month={props.dateValue.month} onChange={props.onSelect} />
      <SelectDay day={props.dateValue.day} onChange={props.onSelect} />
    </div>
    <SignUpMiddleTitle text={"주소"} />
    <div className="flex flex-row w-f justify-stretch">
      <InputBox
        style={"bg-bGray text-fontBlack text-default"}
        placeholder={"주소를 입력해주세요."}
        type={"text"}
        value={props.UpdateValue.mainAddress}
        name={"mainAddress"}
        onChange={props.onChange}
      />
      <Button
        style="bg-bgYellow text-fontBlack text-default ml-2 h-9 text-nowrap"
        text={"주소확인"}
        onClick={props.onAddressCheck}
      />
    </div>
    <InputBox
      style={"bg-bGray text-fontBlack text-default mt-2.5"}
      placeholder={"상세주소"}
      type={"text"}
      value={props.UpdateValue.subAddress}
      name={"subAddress"}
      onChange={props.onChange}
    />
    <SignUpMiddleTitle text={"성별"} />
    <GenderRadio
      gender={props.UpdateValue.gender}
      onChange={props.onGenderCheck}
    />
    <Button
      style="bg-bgYellow text-fontBlack text-buttonFont mt-12 h-12"
      text={"수정하기"}
      onClick={props.onClick}
    />
  </div>
);
