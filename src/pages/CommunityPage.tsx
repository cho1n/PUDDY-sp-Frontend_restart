import { useCommunity } from "../hooks/useCommunity";
import { CommunityTemplate } from "../components/template/CommunityTemplate";
import { Layout } from "../components/common/layout/Layout";

export const CommunityPage = () => {
  const {
    postList,
    currentPage,
    handlePostClick,
    handleWritePost,
    handlePageChange,
  } = useCommunity();
  return (
    <Layout title={"커뮤니티"} showHeader={true} showFooter={true}>
      <CommunityTemplate
        postValue={postList}
        pageNum={currentPage}
        onClick={handlePostClick}
        onCreatePost={handleWritePost}
        onChangePage={handlePageChange}
      />
    </Layout>
  );
};
