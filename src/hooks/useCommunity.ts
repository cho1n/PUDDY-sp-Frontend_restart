import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PostInputType, PostListType } from "../types/community";
import { getPostList, postCreatePost } from "../apis/CommunityApi";
import { ReissueToken } from "../apis/SignApi";

export const useCommunity = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<PostListType>({
    count: 0,
    posts: [],
  });
  const [page, setPage] = useState<number>(1);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

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

  const handleWritePost = (postInputType: PostInputType) => {
    postCreatePost(postInputType);
    navigate("/post");
    window.location.reload();
  };

  const handlePageChange = async (direction: "prev" | "next") => {
    let nextPage = direction === "prev" ? page - 1 : page + 1;
    if (nextPage > 0) {
      const response = await getPostList(nextPage);
      const postData = response.data;

      if (postData && postData.posts && postData.posts.length > 0) {
        setPage(nextPage);
      }
    }
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return {
    postList,
    currentPage: page,
    title,
    content,
    handlePostClick,
    handleWritePost,
    handlePageChange,
    handleTitle,
    handleContent,
  };
};
