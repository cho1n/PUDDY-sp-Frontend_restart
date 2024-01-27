import React from "react";
import { Button } from "../common/Button";
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
      <div className=" flex-col px-4 w-full max-h-haveHeader overflow-auto scrollbar-hide">
        <PostList {...props.postValue} />
      </div>
    </div>
  );
};
