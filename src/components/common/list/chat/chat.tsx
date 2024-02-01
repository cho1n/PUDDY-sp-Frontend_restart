import { ChatProfileType } from "../../../../types/chat";
import { Button } from "../../Button";

interface ChatProps extends ChatProfileType {
  goToProfile: (personId: number) => void;
}

export const Chat = (props: ChatProps) => {
  const gender = props.gender ? "아빠" : "엄마";
  const message = `${props.dog.name} ${gender}님과 채팅을 시작해보세요 !`;
  return (
    <div className="py-2.5 w-full border-y-2">
      <div className="flex flex-row justify-start w-full h-10">
        <img
          src={props.dog.image}
          className="w-20 h-20 mr-4 rounded-full"
          alt="dog"
        />
        <p className="flex items-center text-middleFont h-10">{message}</p>
      </div>
      <div className="flex justify-end w-full h-7.5 mr-2.5">
        <Button
          style="bg-bgYellow text-fontBlack text-smallFont"
          text={"채팅 시작"}
          onClick={() => props.goToProfile(props.id)}
        />
      </div>
    </div>
  );
};
