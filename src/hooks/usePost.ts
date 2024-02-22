import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { PostDetailType, PostInputType } from "../types/community";
import {
  deleteComment,
  deletePost,
  getPostDetail,
  patchComment,
  patchPost,
  postComment,
  postLikePost,
} from "../apis/CommunityApi";
import { useParams } from "react-router";
import { useReissueToken } from "./useCommon";

export const usePost = () => {
  const { getReissueToken } = useReissueToken();
  const navigate = useNavigate();
  const { postId } = useParams();
  const postIdNumber = Number(postId);
  const [comment, setComment] = useState<string>("");
  const [changeComment, setChangeComment] = useState<string>("");

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
          getReissueToken("/post");
        } else if (err.response.status === 404) {
          alert("존재하지 않는 게시글입니다.");
        }
      });
  }, []);

  const handleLikeClick = () => {
    postLikePost(post.id);
    window.location.reload();
  };

  const handlePostTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };
  const handlePostContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeComment(e.target.value);
  };

  const handleCreateComment = (postId: number, content: string) => {
    postComment(postId, content);
    alert("댓글이 등록되었습니다.");
    window.location.reload();
  };

  const handlePatchComment = (commentId: number, content: string) => {
    patchComment(post.id, commentId, content);
    alert("댓글이 수정되었습니다.");
    window.location.reload();
  };

  const handleDeleteComment = (commentId: number) => {
    deleteComment(post.id, commentId);
    alert("댓글이 삭제되었습니다.");
    window.location.reload();
  };

  const handlePatchPost = (postId: number, postInputType: PostInputType) => {
    patchPost(postId, postInputType)
      .then(() => {
        navigate("/post");
        alert("게시글이 수정되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 403) {
          getReissueToken(`/post-write/${postId}`);
        } else if (err.response.status === 404) {
          alert("존재하지 않는 게시글입니다.");
        }
      });
  };

  const handleDeletePost = (postId: number) => {
    deletePost(postId)
      .then(() => {
        alert("게시글이 삭제되었습니다.");
        navigate("/post");
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 403) {
          getReissueToken("/post");
        } else if (err.response.status === 404) {
          alert("존재하지 않는 게시글입니다.");
        }
      });
  };

  return {
    post,
    comment,
    changeComment,
    handlePostTitle,
    handlePostContent,
    handleLikeClick,
    handleComment,
    handleChangeComment,
    handleCreateComment,
    handlePatchComment,
    handleDeleteComment,
    handlePatchPost,
    handleDeletePost,
  };
};
