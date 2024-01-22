import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateProfileInputType } from "../types/update";
import { DateType } from "../types/date";
import { patchProfile } from "../apis/MyPageApi";
import { getUserInfo } from "../apis/MyPageApi";
import { CheckAddress } from "../apis/SignApi";

export const useProfile = () => {
  const navigate = useNavigate();
  const [UpdateValue, setUpdateValue] = useState<UpdateProfileInputType>({
    login: "",
    password: "",
    birth: "",
    mainAddress: "",
    subAddress: "",
    gender: true,
  });
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [isCorrectAddress, setIsCorrectAddress] = useState<boolean>(false);
  const [dateValue, setDateValue] = useState<DateType>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateValue({
      ...UpdateValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignUpSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDateValue({
      ...dateValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value);
  };
  const handleGenderCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "true") {
      setUpdateValue({
        ...UpdateValue,
        [e.target.name]: true,
      });
    } else {
      setUpdateValue({
        ...UpdateValue,
        [e.target.name]: false,
      });
    }
  };

  const handleUpdateProfile = () => {
    if (
      isCorrectAddress === true &&
      checkPassword === UpdateValue.password &&
      UpdateValue.password !== "" &&
      UpdateValue.mainAddress !== "" &&
      UpdateValue.subAddress !== ""
    ) {
      let month = `${dateValue.month}`;
      let day = `${dateValue.day}`;
      if (dateValue.month < 10) {
        month = `0${dateValue.month}`;
      }
      if (dateValue.day < 10) {
        day = `0${dateValue.day}`;
      }
      UpdateValue.birth = `${dateValue.year}-${month}-${day}`;
      if (passwordRegEx.test(UpdateValue.password) === false) {
        alert("비밀번호는 8~20자의 영문 대소문자, 숫자로만 입력해주세요.");
        return;
      }
      patchProfile(UpdateValue)
        .then((res) => {
          alert("수정이 완료되었습니다.");
          navigate("/mypage");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("입력값을 확인해주세요.");
    }
  };
  const handleCheckAddress = () => {
    CheckAddress(UpdateValue.mainAddress).then((res) => {
      if (res.data === false) {
        alert("존재하지 않는 주소입니다.");
        setIsCorrectAddress(false);
      } else {
        alert("사용 가능한 주소입니다.");
        setIsCorrectAddress(true);
      }
    });
  };

  useEffect(() => {
    getUserInfo()
      .then((res) => {
        setUpdateValue(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          alert("로그인이 필요합니다.");
          navigate("/signin");
        }
      });
  }, []);

  return {
    UpdateValue,
    checkPassword,
    dateValue,
    passwordRegEx,
    handleSignUpChange,
    handleCheckPassword,
    handleSignUpSelect,
    handleGenderCheck,
    handleUpdateProfile,
    handleCheckAddress,
  };
};
