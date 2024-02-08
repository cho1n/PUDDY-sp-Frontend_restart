import { Layout } from "../components/common/layout/Layout";
import { RecommendWalkRoadTemplate } from "../components/template";
import { useRecommendWalkRoad } from "../hooks/useRecommendWalkRoad";
import { useEffect } from "react";

export const RecommendWalkRoadPage = () => {
  const { walkRoadTypeList, userLocation, userAddress, handleWalkRoad } =
    useRecommendWalkRoad();
  useEffect(() => {
    handleWalkRoad();
  }, []);
  return (
    <Layout title={"내 주변 산책로"} showHeader={true} showFooter={false}>
      <RecommendWalkRoadTemplate
        walkRoadTypeList={walkRoadTypeList}
        userLocation={userLocation}
        userAddress={userAddress}
      />
    </Layout>
  );
};
