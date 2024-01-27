import { MatchType } from "../../types/match";
import { male, female, address, cancel, heart } from "../../assets/Match";
import { TagList } from "../common/list/tag/TagList";

interface WhoLikeDetailTemplateProps {
  personDetailValue: MatchType;
  handleMatchCancel: () => void;
  handlepostMatch: (personId: number) => void;
}

export const WhoLikeDetailTemplate = (props: WhoLikeDetailTemplateProps) => {
  return (
    <div className="w-full h-haveHeaderAndFooter px-4">
      <div
        className="grid content-end w-full h-haveHeaderAndFooter rounded-lg"
        style={{
          backgroundImage: `url(${props.personDetailValue.dog.image})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-start w-full bg-bgBlack opacity-65 rounded-b-lg p-3">
          <div className="flex flex-row items-center h-8">
            <p className="text-fontWhite text-bigTitle mr-1">
              {props.personDetailValue.dog.name} (
              {props.personDetailValue.dog.age}살)
            </p>
            {props.personDetailValue.dog.gender ? (
              <img className="h-6" src={male} />
            ) : (
              <img className="h-6" src={female} />
            )}
          </div>
          <p className="text-fontWhite text-middleTitle h-8">
            {props.personDetailValue.dog.type}
          </p>
          <TagList tags={props.personDetailValue.dog.tags} />
          <div className="flex flex-row h-8 items-center mt-4">
            <p className="text-fontWhite text-bigTitle mr-1">
              {props.personDetailValue.login} ({props.personDetailValue.age}살)
            </p>
            {props.personDetailValue.gender ? (
              <img className="h-6" src={male} />
            ) : (
              <img className="h-6" src={female} />
            )}
          </div>
          <div className="flex flex-row h-8 items-center">
            <img className="w-7 h-8 mr-1" src={address} />
            <p className="text-fontWhite text-middleTitle">
              {props.personDetailValue.mainAddress}
            </p>
          </div>
          <div className="flex flex-row justify-center w-full mt-7">
            <img
              className="w-10 h-10 mr-5"
              src={cancel}
              onClick={() => {
                props.handleMatchCancel();
              }}
            />
            <img
              className="w-10 h-10"
              src={heart}
              onClick={() => {
                props.handlepostMatch(props.personDetailValue.id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
