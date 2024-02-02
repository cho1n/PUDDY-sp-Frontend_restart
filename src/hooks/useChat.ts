import { useEffect, useState } from "react";
import { getChatList } from "../apis/chat";
import { ChatListType } from "../types/chat";
import { useReissueToken } from "./useCommon";

export const useChat = () => {
  const { getReissueToken } = useReissueToken();

  const [chatListValue, setChatListValue] = useState<ChatListType>({
    persons: [],
  });

  useEffect(() => {
    getChatList()
      .then((res) => {
        console.log(res.data);
        setChatListValue(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          getReissueToken("/chat");
        }
      });
  }, []);

  const goToProfile = (personId: number) => {
    console.log(personId);
  };

  return { chatListValue, goToProfile };
};
