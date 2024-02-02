import { PostInputType, PostListType } from "../../types/community";
import { Button } from "../common/Button";
import { PostList } from "../common/list/post/PostList";

interface CommunityProps {
  postValue: PostListType;
  pageNum: number;
  onClick: (postId: number) => void;
  onCreatePost: (postInputType: PostInputType) => void;
  onChangePage: (direction: "prev" | "next") => void;
}

export const CommunityTemplate = (props: CommunityProps) => {
  return (
    <div className="flex flex-col w-full h-haveHeaderAndFooter px-4">
      <div className="flex-col px-2 w-full h-600">
        <PostList onClick={props.onClick} {...props.postValue} />
      </div>
      <div className="flex flex-row px-4 justify-center">
        <Button
          style="mr-3 px-1"
          text="이전"
          onClick={() => props.onChangePage("prev")}
        />
        <p className="pt-2.5 mx-20">{props.pageNum}</p>
        <Button
          style="ml-3 px-1"
          text="다음"
          onClick={() => props.onChangePage("next")}
        />
      </div>
    </div>
  );
};
