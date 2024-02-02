import { useCommunity } from "../hooks/useCommunity";
import { Layout } from "../components/common/layout/Layout";
import { PostWriteTemplate } from "../components/template/PostWriteTemplate";

export const PostWritePage = () => {
  const { title, content, handleTitle, handleContent, handleWritePost } =
    useCommunity();
  return (
    <Layout title={"게시글 작성"} showHeader={true} showFooter={true}>
      <PostWriteTemplate
        title={title}
        content={content}
        onChangeTitle={handleTitle}
        onChangeContent={handleContent}
        onWritePost={handleWritePost}
      />
    </Layout>
  );
};
