import { useEffect, useState } from "react";
import { getChatList } from "../apis/chat";
import { ChatListType } from "../types/chat";
import { useNavigate } from "react-router-dom";
import { ReissueToken } from "../apis/SignApi";

export const useChat = () => {
  const [chatListValue, setChatListValue] = useState<ChatListType>({
    persons: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    getChatList()
      .then((res) => {
        console.log(res.data);
        setChatListValue(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          ReissueToken()
            .then((res) => {
              const accessToken = res.headers["authorization"] as string;
              const refreshToken = res.headers["reauthorization"] as string;
              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("refreshToken", refreshToken);
              navigate("/alert");
            })
            .catch((err) => {
              if (err.response.status === 400) {
                alert("로그인이 필요합니다.");
                navigate("/");
              }
            });
        }
      });
  }, []);

  const goToProfile = (personId: number) => {
    console.log(personId);
  };

  return { chatListValue, goToProfile };
};
