import { usePostDogWithSignUp } from "../hooks";
import { PostDogTemplate } from "../components/template";
import { Layout } from "../components/common/layout/Layout";

export const PostDogPage = () => {
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
    handlePostDogWithOutSignUp,
  } = usePostDogWithSignUp();

  return (
    <Layout title={"새 가족 추가하기"} showHeader={true} showFooter={false}>
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
        onClickNext={handlePostDogWithOutSignUp}
        onClick={handlePostDogWithOutSignUp}
      />
    </Layout>
  );
};
