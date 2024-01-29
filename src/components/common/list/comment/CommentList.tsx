import { PostDetailType } from "../../../../types/community";
import { Comment } from "./Comment";

interface PostListProps extends PostDetailType {}

export const CommentList = (props: PostListProps) => {
  return (
    <div className="grid grid-cols-1 w-full">
      {props.comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};
