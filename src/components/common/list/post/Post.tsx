import { PostType } from "../../../../types/community";
import thumbUp from "../../../../assets/Community/ThumbUp.svg";
import chatBubble from "../../../../assets/Community/ChatBubble.svg";

interface PostProps extends PostType {
  onClick: (postId: number) => void;
}

export const Post = (props: PostProps) => {
  const gender = props.person.gender ? "아빠" : "엄마";
  return (
    <div className="border-b-2">
      <button
        className="w-full border-2 px-0.5 py-0 bg-bgWhite"
        onClick={() => props.onClick(props.id)}
      >
        <div className="flex flex-row items-center">
          <img
            src={props.person.dog.image}
            className="w-16 h-16 ml-2 mr-2 rounded-full "
            alt="dog"
          />
          <div className="w-64 ml-1 flex flex-col justify-start items-start">
            <div className="h-6 text-ellipsis overflow-hidden">
              <p className="text-default text-start mt-0.5">{props.title}</p>
            </div>

            <div className="h-10 text-ellipsis overflow-hidden">
              <p className="text-smallFont text-start mt-1">{props.content}</p>
            </div>

            <div className="flex mt-1">
              <p className="text-smallFont text-fontGray w-40 text-start">
                {props.createdAt} {" | "} {props.person.dog.name} {gender}
              </p>
              <div className="flex ml-0">
                <img className="w-5 h-5" src={thumbUp} />
                <p className="ml-1">{props.likeCount}</p>
                <img className="w-5 h-5 ml-4 mt-0.5" src={chatBubble} />
                <p className="ml-1">{props.commentCount}</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};
