import { useEffect, useState } from "react";
import { getMyPage } from "../apis/MyPageApi";
import { MyPageType } from "../types/myPage";
import { useNavigate } from "react-router-dom";

export const useMyPage = () => {
  const navigate = useNavigate();
  const [myPageValue, setMyPageValue] = useState<MyPageType>({
    gender: true,
    dogs: [],
  });

  useEffect(() => {
    let accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      navigate("/signin");
    } else {
      getMyPage()
        .then((res) => {
          setMyPageValue(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return { myPageValue, setMyPageValue };
};
