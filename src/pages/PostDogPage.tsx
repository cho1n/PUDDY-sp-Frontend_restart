import { PostDogTemplate } from "../components/template/PostDogTemplate";
import { usePostDogWithSignUp } from "../hooks/usePostDogWithSignUp";

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
    handlePostDog,
    handlePostDogFinish,
  } = usePostDogWithSignUp();
  return (
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
  );
};
