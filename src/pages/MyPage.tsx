import { Layout } from "../components/common/layout/Layout";
import { MyPageTemplate } from "../components/template/MyPageTemplate";

export const MyPage = () => {
  return (
    <Layout title={"마이페이지"} showHeader={true} showFooter={true}>
      <MyPageTemplate />
    </Layout>
  );
};
