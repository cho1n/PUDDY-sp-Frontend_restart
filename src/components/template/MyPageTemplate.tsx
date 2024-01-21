import { useMyPage } from "../../hooks/useMyPage";
import mainIcon from "../../assets/MyPage/Veterinarian.svg";
import pencilIcon from "../../assets/MyPage/pencil.svg";
import settingIcon from "../../assets/MyPage/Vector.svg";
import plusIcon from "../../assets/MyPage/Plus.svg";
import { Link } from "react-router-dom";

export const MyPageTemplate = () => {
  const myPageData = useMyPage();

  return (
    <div className="flex flex-col items-center w-full h-full bg-bgWhite mt-2.5">
      <div className="flex flex-col items-center w-full h-30">
        {myPageData.myPageValue && myPageData.myPageValue.dogs && (
          <img
            className="rounded-full w-36 h-36 mb-2.5"
            src={myPageData.myPageValue.dogs.find((dogs) => dogs.main)?.image}
            alt="dog"
          />
        )}
        <p className="text-fontBlack text-bigTitle font-bold mb-2.5">
          {myPageData.myPageValue &&
            myPageData.myPageValue.dogs &&
            myPageData.myPageValue.dogs
              .filter((dogs) => dogs.main)
              .map((dogs) => dogs.name)}
          {myPageData.myPageValue.gender ? " 아빠" : " 엄마"}
        </p>
      </div>
      <div className="flex flex-row item-center justify-center space-x-14 w-90 h-22 border-b-2 border-solid py-2">
        <div className="flex flex-col items-center w-18 h-22 cursor-pointer pl-4">
          <div className="w-12 h-12 rounded-full bg-bgMyPageButton flex items-center justify-center mb-2">
            <img className="w-8 h-8" src={settingIcon} alt="settingIcon" />
          </div>
          <p className="text-fontGray text-defalut"> 설정</p>
        </div>
        <div className="flex flex-col items-center w-18 h-22 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-bgMyPageButton2 opacity-60 flex items-center justify-center mb-2">
            <img className="w-8 h-8" src={mainIcon} alt="mainIcon" />
          </div>
          <p className="text-fontGray text-defalut"> 반려동물 수정 </p>
        </div>
        <div className="flex flex-col items-center w-18 h-22 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-bgMyPageButton flex items-center justify-center mb-2">
            <img className="w-8 h-8" src={pencilIcon} alt="mainIcon" />
          </div>
          <p className="text-fontGray text-defalut"> 프로필 수정 </p>
        </div>
      </div>
      <div className="flex flex-col item-center justify-center w-90 h-22 border-b-2 border-solid py-2">
        <div className="flex item-center justify-center w-20 h-20 bg-bgGray rounded-full">
          <img className="w-8 h-8" src={plusIcon} alt="plusIcon" />
        </div>
      </div>
    </div>
  );
};
