import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PostListType } from "../types/community";
import { getPostList } from "../apis/CommunityApi";
import { ReissueToken } from "../apis/SignApi";

export const useCommunity = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<PostListType>({
    count: 0,
    posts: [],
  });
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getPostList(page)
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          ReissueToken()
            .then((res) => {
              const accessToken = res.headers["authorization"] as string;
              const refreshToken = res.headers["reauthorization"] as string;
              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("refreshToken", refreshToken);
              navigate("/post");
            })
            .catch((err) => {
              if (err.response.status === 400) {
                alert("로그인이 필요합니다.");
                navigate("/");
              }
            });
        }
      });
  }, [page]);

  const handlePostClick = (postId: number) => {
    navigate(`/post/${postId}`);
  };

  const handleWritePostClick = () => {
    navigate("/post");
  };

  const handlePageChange = (direction: "prev" | "next") => {
    if (direction === "prev" && page > 1) {
      setPage(page - 1);
    } else if (direction === "next") {
      setPage(page + 1);
    }
  };

  return {
    postList,
    currentPage: page,
    handlePostClick,
    handleWritePostClick,
    handlePageChange,
  };
};
