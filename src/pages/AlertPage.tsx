import { Layout } from "../components/common/layout/Layout";
import { AlertTemplate } from "../components/template";
import { useAlert } from "../hooks";

export const AlertPage = () => {
  const { alertValue, goToProfile } = useAlert();

  return (
    <Layout title={"알림"} showHeader={true} showFooter={false}>
      <AlertTemplate alertValue={alertValue} goToProfile={goToProfile} />
    </Layout>
  );
};
