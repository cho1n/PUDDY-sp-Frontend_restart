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
    handleDeleteDog,
  } = useDogProfile();
  return (
    <Layout title={"프로필 수정"} showHeader={true} showFooter={false}>
      <DogProfileUpdateTemplate
        UpdateDogValue={updateDogValue}
        onChangeImage={handlePostDogImage}
        onSelect={handleDogValueSelect}
        onGenderCheck={handleRadioCheck}
        onNeuterCheck={handleRadioCheck}
        onChangeTag={handlePostDogTag}
        onDelete={handleDeleteDog}
        onClick={handleUpdateDog}
      />
    </Layout>
  );
};
