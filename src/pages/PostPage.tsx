import { usePost } from "../hooks/usePost";
import { PostTemplate } from "../components/template/PostTemplate";
import { Layout } from "../components/common/layout/Layout";

export const PostPage = () => {
  const { post, handleLikeClick } = usePost();
  return (
    <Layout title={"커뮤니티"} showHeader={true} showFooter={true}>
      <PostTemplate post={post} onClickLike={handleLikeClick} />
    </Layout>
  );
};
