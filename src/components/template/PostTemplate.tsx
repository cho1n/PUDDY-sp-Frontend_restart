import { PostDetailType } from "../../types/community";
import thumbUp from "../../assets/Community/ThumbUp.svg";
import chatBubble from "../../assets/Community/ChatBubble.svg";

interface PostProps {
  post: PostDetailType;
  onClickLike: () => void;
}

export const PostTemplate = (props: PostProps) => {
  const gender = props.post.person.gender ? "아빠" : "엄마";

  return (
    <div className="h-haveHeaderAndFooter px-4 border-blue-500 border-2 overflow-auto scrollbar-hide">
      <div className="flex flex-col border-green-500 border-2">
        <div className="flex flex-row border-red-500 border-2">
          <img
            src={props.post.person.dog.image}
            className="w-9 h-9 mr-1 mt-1 rounded-full"
            alt="dog"
          />
          <div className="flex flex-col w-full justify-start items-start">
            <p className="text-default">
              {props.post.person.dog.name} {gender}
            </p>
            <p className="text-smallFont text-fontGray">
              {props.post.createdAt}
            </p>
          </div>
        </div>
        <div className="flex flex-col text-ellipsis overflow-hidden">
          <p className="pt-1 text-middleFont text-start ">{props.post.title}</p>
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-smallFont text-start">{props.post.content}</p>
        </div>
        <div className="flex mt-4">
          <button className="m-0 p-0" onClick={() => props.onClickLike()}>
            <img className="w-5 h-5" src={thumbUp} />
          </button>
          <p className="ml-1">{props.post.likeCount}</p>
          <img className="w-5 h-5 ml-4" src={chatBubble} />
          <p className="ml-1">{props.post.comments.length}</p>
        </div>
      </div>
      <div className="flex flex-col border-green-500 border-2 h-52"></div>
      <div className="flex flex-col border-green-500 border-2 h-52"></div>
    </div>
  );
};
