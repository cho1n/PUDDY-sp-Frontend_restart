import { usePostDogWithSignUp } from "../hooks";
import { PostDogTemplate } from "../components/template";
import { Layout } from "../components/common/layout/Layout";

export const PostDogPageWithSignUp = () => {
  const {
    postDogValue,
    dateValue,
    isCorrectRegisterNum,
    handlePostDogChange,
    handlePostDogImage,
    handlePostDogTag,
    handleRadioCheck,
    handleDateSelect,
    handlePostDogSelect,
    handleCheckRegisterNum,
    handlePostDog,
    handlePostDogFinish,
  } = usePostDogWithSignUp();
  return (
    <Layout title={"회원가입"} showHeader={true} showFooter={false}>
      <PostDogTemplate
        postDogValue={postDogValue}
        dateValue={dateValue}
        isCorrectRegisterNum={isCorrectRegisterNum}
        onChange={handlePostDogChange}
        onChangeImage={handlePostDogImage}
        onChangeTag={handlePostDogTag}
        onRadioCheck={handleRadioCheck}
        onSelect={handlePostDogSelect}
        onSelectDate={handleDateSelect}
        onCheckRegisterNum={handleCheckRegisterNum}
        onClickNext={handlePostDog}
        onClick={handlePostDogFinish}
      />
    </Layout>
  );
};
