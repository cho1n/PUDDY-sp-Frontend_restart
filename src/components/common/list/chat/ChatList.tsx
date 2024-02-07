import { useEffect, useRef } from "react";
import { ChatListType } from "../../../../types/chat";
import { Chat } from "./chat";

interface ChatListProps extends ChatListType {
  goToProfile: (personId: number) => void;
  enterChat: (chatId: number) => void;
}

export const ChatList = (props: ChatListProps) => {
  return (
    <div className="w-full grid grid-cols-1 border-t-2">
      {props.chats.map((chat, index) => (
        <Chat
          key={index}
          {...chat}
          goToProfile={props.goToProfile}
          enterChat={props.enterChat}
        />
      ))}
    </div>
  );
};
