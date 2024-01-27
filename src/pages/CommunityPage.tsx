import { useSignIn } from "../hooks";
import { useCommunity } from "../hooks/useCommunity";
import { SignInTemplate } from "../components/template";
import { CommunityTemplate } from "../components/template/CommunityTemplate";
import { Layout } from "../components/common/layout/Layout";

export const CommunityPage = () => {
  const {
    postList,
    currentPage,
    handlePostClick,
    handleWritePostClick,
    handlePageChange,
  } = useCommunity();
  return (
    <Layout title={"커뮤니티"} showHeader={true} showFooter={true}>
      <CommunityTemplate
        postValue={postList}
        pageNum={currentPage}
        onClick={handlePostClick}
        onCreatePost={handleWritePostClick}
        onChangePage={handlePageChange}
      />
    </Layout>
  );
};
