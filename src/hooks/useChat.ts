import { useEffect, useState } from "react";
import { getChatList } from "../apis/ChatApi";
import { ChatListType } from "../types/chat";
import { useReissueToken } from "./useCommon";
import { useNavigate } from "react-router-dom";

export const useChat = () => {
  const { getReissueToken } = useReissueToken();
  const navigate = useNavigate();

  const [chatListValue, setChatListValue] = useState<ChatListType>({
    chats: [],
  });

  useEffect(() => {
    getChatList()
      .then((res) => {
        setChatListValue(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          getReissueToken("/chat");
        }
      });
  }, []);
  const enterChat = (chatId: number) => {
    navigate(`/chat/${chatId}`);
  };

  const goToProfile = (personId: number) => {
    console.log(personId);
  };

  return { chatListValue, goToProfile, enterChat };
};
