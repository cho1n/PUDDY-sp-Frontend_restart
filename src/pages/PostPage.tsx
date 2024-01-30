import { usePost } from "../hooks/usePost";
import { PostTemplate } from "../components/template/PostTemplate";
import { Layout } from "../components/common/layout/Layout";

export const PostPage = () => {
  const { post, comment, handleLikeClick, handleComment, handleCreateComment } =
    usePost();
  return (
    <Layout title={"커뮤니티"} showHeader={true} showFooter={true}>
      <PostTemplate
        post={post}
        comment={comment}
        onClickLike={handleLikeClick}
        onCheckComment={handleComment}
        onCreateComment={handleCreateComment}
      />
    </Layout>
  );
};
