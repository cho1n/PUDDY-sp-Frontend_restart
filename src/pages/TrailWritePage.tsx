import { Layout } from "../components/common/layout/Layout";
import { useTrailList } from "../hooks/useTrailList";
import { TrailWriteTemplate } from "../components/template/TrailWriteTemplate";

export const TrailWritePage = () => {
  const { content, handleContent, handleWriteTrail } = useTrailList();
  return (
    <Layout title={"후기 작성"} showHeader={true} showFooter={true}>
      <TrailWriteTemplate
        content={content}
        onChangeContent={handleContent}
        onWriteTrail={handleWriteTrail}
      />
    </Layout>
  );
};
