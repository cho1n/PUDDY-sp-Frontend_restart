import { Layout } from "../components/common/layout/Layout";
import { DogProfileUpdateTemplate } from "../components/template/DogProfileUpdateTemplate";
import { useDogProfile } from "../hooks/useDogProfile";

export const DogProfileUpdatePage = () => {
  const {
    updateDogValue,
    handleDogValueSelect,
    handleRadioCheck,
    handlePostDogImage,
    handlePostDogTag,
    handleUpdateDog,
  } = useDogProfile();
  return (
    <Layout title={"프로필 수정"} showHeader={true} showFooter={false}>
      <DogProfileUpdateTemplate
        UpdateDogValue={updateDogValue}
        onSelect={handleDogValueSelect}
        onRadioCheck={handleRadioCheck}
        onPostDogImage={handlePostDogImage}
        onPostDogTag={handlePostDogTag}
        onClick={handleUpdateDog}
      />
    </Layout>
  );
};
