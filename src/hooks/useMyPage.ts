import { useEffect, useState } from "react";
import { getMyPage } from "../apis/MyPageApi";
import { MyPageType } from "../types/myPage";
import { useNavigate } from "react-router-dom";

export const useMyPage = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [myPageValue, setMyPageValue] = useState<MyPageType>({
    dogs: [],
    gender: true,
  });

  const getMyPageInfo = async () => {
    try {
      const res = await getMyPage();
      const datas = res.data;
      setMyPageValue(datas);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    alert("로그아웃 되었습니다.");
    navigate("/signin");
  };

  const buttonNavigate = (props: string) => {
    navigate(props);
  };

  useEffect(() => {
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      navigate("/signin");
    } else {
      getMyPageInfo();
    }
  }, []);

  return { myPageValue, logout, buttonNavigate };
};
