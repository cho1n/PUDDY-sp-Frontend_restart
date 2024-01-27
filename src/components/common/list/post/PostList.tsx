import { PostListType } from "../../../../types/community";
import { Post } from "./Post";

interface PostListProps extends PostListType {}

export const PostList = (props: PostListProps) => {
  return (
    <div className="w-full grid grid-cols-1 ">
      {props.posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};
