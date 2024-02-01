import { Layout } from "../components/common/layout/Layout";
import { WhoLikeDetailTemplate } from "../components/template/WhoLikeDetailTemplate";
import { usePersonDetail } from "../hooks";

export const WhoLikeDetailPage = () => {
  const { personDetailValue, handleMatchCancel, handlepostMatch } =
    usePersonDetail();
  return (
    <Layout title={"상세 정보"} showHeader={true} showFooter={true}>
      <WhoLikeDetailTemplate
        personDetailValue={personDetailValue}
        handleMatchCancel={handleMatchCancel}
        handlepostMatch={handlepostMatch}
      />
    </Layout>
  );
};
