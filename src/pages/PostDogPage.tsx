import { usePostDogWithSignUp } from "../hooks";
import { PostDogTemplate } from "../components/template";

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
