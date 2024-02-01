import sendIcon from "../../assets/chat/sendIcon.svg";
import veterinarian from "../../assets/MyPage/Veterinarian.svg";

export const ChatTemplate = () => {
  return (
    <div className="flex flex-col items-center justify-end w-393 h-haveHeader bg-bgYellow">
      <div className="w-20 h-20 rounded-full flex items-center justify-center">
        <img src={veterinarian} className="w-20 h-20" alt=""></img>
      </div>
      <p className="text-bigTitle mb-2 font-abee font-bold text-fontWhite ">
        봄이 아빠
      </p>
      <div className="flex flex-col justify-end items-center bg-bgWhite w-full h-580 rounded-t-32 p-4">
        <div className="flex justify-start items-center w-359 shadow-lg h-43 rounded-20 mb-3 pl-2">
          <input
            className="w-72 h-5/6 pl-2"
            placeholder="메세지를 입력하세요..."
          />
          <div className="flex items-center w-30 h-30 bg-bgYellow ml-4 pl-2 rounded-full hover:bg-bgYellowHover">
            <img src={sendIcon} className="w-4 h-4" alt="sendIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};
