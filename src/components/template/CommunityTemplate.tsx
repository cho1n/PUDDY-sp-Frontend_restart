import { PostListType } from "../../types/community";
import { PostList } from "../common/list/post/PostList";

interface CommunityProps {
  postValue: PostListType;
  pageNum: number;
  onClick: (postId: number) => void;
  onCreatePost: () => void;
  onChangePage: (direction: "prev" | "next") => void;
}

export const CommunityTemplate = (props: CommunityProps) => {
  return (
    <div className="flex flex-col w-full h-haveHeaderAndFooter px-4">
      <div className="flex-col px-4 w-full">
        <PostList onClick={props.onClick} {...props.postValue} />
      </div>
    </div>
  );
};
