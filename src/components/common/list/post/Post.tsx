import { Button } from "../../Button";
import { PostType } from "../../../../types/community";
import thumbUp from "../../../../assets/Community/ThumbUp.svg";
import chatBubble from "../../../../assets/Community/ChatBubble.svg";

interface PostProps extends PostType {}

export const Post = (props: PostProps) => {
  const gender = props.person.gender ? "아빠" : "엄마";
  return (
    <div className="py-1 w-full border-t-2">
      <div className="flex flex-row items-center">
        <img
          src={props.person.dog.image}
          className="w-20 h-20 mr-1 rounded-full"
          alt="dog"
        />
        <div className="flex flex-col w-full justify-start items-start ">
          <p className="text-default">{props.title}</p>

          <div className="h-10 text-ellipsis overflow-hidden">
            <p className="pt-1 text-smallFont text-start ">{props.content}</p>
          </div>
          <div className="flex w-full pt-1">
            <p className="text-smallFont text-fontGray">
              {props.createdAt} {" | "} {props.person.dog.name} {gender}
            </p>
            <div className="flex ml-7">
              <img className="w-5 h-5" src={thumbUp} />
              <p className="ml-1">{props.likeCount}</p>
              <img className="w-5 h-5 ml-3" src={chatBubble} />
              <p className="ml-1">{props.commentCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
