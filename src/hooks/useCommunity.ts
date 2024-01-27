import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PostInputType, PostListType } from "../types/community";
import { getPostList } from "../apis/CommunityApi";
import { ReissueToken } from "../apis/SignApi";

export const useCommunity = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<PostListType>();

  useEffect(() => {
    getPostList()
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
};
