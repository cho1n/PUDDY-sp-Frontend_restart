import { usePost } from "../hooks/usePost";
import { PostTemplate } from "../components/template/PostTemplate";
import { Layout } from "../components/common/layout/Layout";

export const PostPage = () => {
  const {
    post,
    comment,
    changeComment,
    handleLikeClick,
    handleChangeComment,
    handleComment,
    handleCreateComment,
    handlePatchComment,
    handleDeleteComment,
    handlePatchPost,
    handleDeletePost,
  } = usePost();
  return (
    <Layout title={"커뮤니티"} showHeader={true} showFooter={true}>
      <PostTemplate
        post={post}
        comment={comment}
        changeComment={changeComment}
        onClickLike={handleLikeClick}
        onCheckComment={handleComment}
        onChangeComment={handleChangeComment}
        onCreateComment={handleCreateComment}
        onPatchComment={handlePatchComment}
        onDeleteComment={handleDeleteComment}
        onPatchPost={handlePatchPost}
        onDeletePost={handleDeletePost}
      />
    </Layout>
  );
};
