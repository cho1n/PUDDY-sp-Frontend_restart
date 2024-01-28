import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ReissueToken } from "../apis/SignApi";
import { PostDetailType } from "../types/community";
import { getPostDetail } from "../apis/CommunityApi";
import { useParams } from "react-router";

export const usePost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const postIdNumber = Number(postId);

  const [post, setPost] = useState<PostDetailType>({
    id: postIdNumber,
    person: { gender: true, dog: { image: "", name: "" } },
    title: "",
    content: "",
    createdAt: "",
    isLike: true,
    likeCount: 0,
    comments: [],
    isMine: true,
  });

  useEffect(() => {
    getPostDetail(post.id)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          ReissueToken()
            .then((res) => {
              const accessToken = res.headers["authorization"] as string;
              const refreshToken = res.headers["reauthorization"] as string;
              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("refreshToken", refreshToken);
              navigate("/match");
            })
            .catch((err) => {
              if (err.response.status === 400) {
                alert("로그인이 필요합니다.");
                navigate("/");
              }
            });
        }
      });
  }, []);

  return {
    post,
  };
};
