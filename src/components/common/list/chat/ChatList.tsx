import { ChatListType } from "../../../../types/chat";
import { Chat } from "./chat";

interface ChatListProps extends ChatListType {
  goToProfile: (personId: number) => void;
}

export const ChatList = (props: ChatListProps) => {
  return (
    <div className="w-full grid grid-cols-1">
      {props.persons.map((chat, index) => (
        <Chat key={index} {...chat} goToProfile={props.goToProfile} />
      ))}
    </div>
  );
};
