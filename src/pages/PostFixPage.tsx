import { Layout } from "../components/common/layout/Layout";
import { PostFixTemplate } from "../components/template/PostFixTemplate";
import { usePost } from "../hooks/usePost";

export const PostFixPage = () => {
  const { post, handlePost, handlePatchPost } = usePost();
  return (
    <Layout title={"게시글 수정"} showHeader={true} showFooter={true}>
      <PostFixTemplate
        post={post}
        onChange={handlePost}
        onPatchPost={handlePatchPost}
      />
    </Layout>
  );
};
