import { PostDetailType } from "../../types/community";

interface PostProps {
  post: PostDetailType;
}

export const PostTemplate = (props: PostProps) => {
  return (
    <div className="flex flex-col w-full h-haveHeaderAndFooter px-4">
      <div className=" flex-col px-4 w-full max-h-haveHeader overflow-auto scrollbar-hide">
        <p>{props.post.id}</p>
      </div>
    </div>
  );
};
