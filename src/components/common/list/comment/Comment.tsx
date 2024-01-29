import { CommentType } from "../../../../types/comment";

interface CommentProps extends CommentType {}

export const Comment = (props: CommentProps) => {
  const gender = props.person.gender ? "아빠" : "엄마";
  return (
    <div className="flex-col w-full border-t">
      <div className="px-1 w-full overflow-auto scrollbar-hide">
        <div className="flex w-full flex-row mt-1">
          <img
            src={props.person.dog.image}
            className="w-9 h-9 mr-1 mt-1 rounded-full"
            alt="dog"
          />
          <div className="flex w-full flex-col justify-start items-start">
            <p className="text-default">
              {props.person.dog.name} {gender}
            </p>
            <p className="text-smallFont text-fontGray">{props.createdAt}</p>
          </div>
        </div>
      </div>
      <div className="flex mt-3 mb-1 w-full">
        <p className="text-smallFont text-start">{props.content}</p>
      </div>
    </div>
  );
};
