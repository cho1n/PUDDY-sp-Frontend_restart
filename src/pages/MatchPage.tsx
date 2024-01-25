import { Layout } from "../components/common/layout/Layout";
import { MatchTemplate } from "../components/template";
import { useMatch } from "../hooks";

export const MatchPage = () => {
  const { matchListValue, handleMatchCancel, handlepostMatch } = useMatch();
  return (
    <Layout title={"강아지 매칭"} showHeader={true} showFooter={true}>
      <MatchTemplate
        matchListValue={matchListValue}
        handleMatchCancel={handleMatchCancel}
        handlepostMatch={handlepostMatch}
      />
    </Layout>
  );
};
