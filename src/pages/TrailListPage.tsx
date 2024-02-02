import { Layout } from "../components/common/layout/Layout";
import { TrailListTemplate } from "../components/template/TrailListTemplate";
import { useTrailList } from "../hooks/useTrailList";

export const TrailListPage = () => {
  const { trailList, currentPage, handlePageChange } = useTrailList();
  return (
    <Layout title={"산책로 후기"} showHeader={true} showFooter={true}>
      <TrailListTemplate
        trailValue={trailList}
        pageNum={currentPage}
        onChangePage={handlePageChange}
      />
    </Layout>
  );
};
