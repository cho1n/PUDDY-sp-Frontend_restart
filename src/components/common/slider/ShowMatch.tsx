import { MatchType } from "../../../types/match";
import { TagList } from "../list/tag/TagList";
import { male, female, address, cancle, heart } from "../../../assets/Match";
interface ShowMatchProps extends MatchType {
  handleMatchCancle: () => void;
  handlepostMatch: (personId: number) => void;
}
export const ShowMatch = (props: ShowMatchProps) => {
  return (
    <div
      className="grid content-end w-full h-haveHeaderAndFooter rounded-lg"
      style={{
        backgroundImage: `url(${props.dog.image})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-start w-full bg-bgBlack opacity-65 rounded-b-lg p-3">
        <div className="flex flex-row items-center h-8">
          <p className="text-fontWhite text-bigTitle mr-1">
            {props.dog.name} ({props.dog.age}살)
          </p>
          {props.dog.gender ? (
            <img className="h-6" src={male} />
          ) : (
            <img className="h-6" src={female} />
          )}
        </div>
        <p className="text-fontWhite text-middleTitle h-8">{props.dog.type}</p>
        <TagList tags={props.dog.tags} />
        <div className="flex flex-row h-8 items-center mt-4">
          <p className="text-fontWhite text-bigTitle mr-1">
            {props.login} ({props.age}살)
          </p>
          {props.gender ? (
            <img className="h-6" src={male} />
          ) : (
            <img className="h-6" src={female} />
          )}
        </div>
        <div className="flex flex-row h-8 items-center">
          <img className="w-7 h-8 mr-1" src={address} />
          <p className="text-fontWhite text-middleTitle">{props.mainAddress}</p>
        </div>
        <div className="flex flex-row justify-center w-full mt-7">
          <img
            className="w-10 h-10 mr-5"
            src={cancle}
            onClick={props.handleMatchCancle}
          />
          <img
            className="w-10 h-10"
            src={heart}
            onClick={() => props.handlepostMatch(props.id)}
          />
        </div>
      </div>
    </div>
  );
};
