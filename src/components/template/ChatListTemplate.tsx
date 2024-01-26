import { ChatListType } from "../../types/chat";
import { ChatList } from "../common/list/chat/ChatList";

interface ChatTemplateProps {
  chatValue: ChatListType;
  goToProfile: (personId: number) => void;
}
export const AlertTemplate = (props: ChatTemplateProps) => {
  return (
    <div className=" flex-col px-4 w-full max-h-haveHeader overflow-auto scrollbar-hide">
      <ChatList {...props.chatValue} goToProfile={props.goToProfile} />
    </div>
  );
};
