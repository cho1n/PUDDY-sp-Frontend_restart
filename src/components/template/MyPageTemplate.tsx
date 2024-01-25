import { useMyPage } from "../../hooks/useMyPage";
import mainIcon from "../../assets/MyPage/Veterinarian.svg";
import pencilIcon from "../../assets/MyPage/pencil.svg";
import settingIcon from "../../assets/MyPage/Vector.svg";
import { Button } from "../common/Button/Button";

export const MyPageTemplate = () => {
  const myPageData = useMyPage();

  return (
    <div className="flex flex-col items-center w-full h-haveHeaderAndFooter bg-bgWhite mt-2.5 px-4">
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
      <div className="flex flex-row item-center justify-center space-x-14 w-full h-22 border-b-2 border-solid py-2">
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
          <p className="text-fontGray text-defalut">새 가족 추가하기</p>
        </div>
        <div className="flex flex-col items-center w-18 h-22 cursor-pointer">
          <div
            className="w-12 h-12 rounded-full bg-bgMyPageButton flex items-center justify-center mb-2"
            onClick={() => myPageData.buttonNavigate("/mypage/profile")}
          >
            <img className="w-8 h-8" src={pencilIcon} alt="mainIcon" />
          </div>
          <p className="text-fontGray text-defalut"> 프로필 수정 </p>
        </div>
      </div>
      <div className="w-full h-80 overflow-auto scrollbar-hide">
        {myPageData.myPageValue &&
          myPageData.myPageValue.dogs &&
          myPageData.myPageValue.dogs
            .filter((dog) => dog.main)
            .map((dog) => (
              <div className="flex flex-row items-center w-full h-22 border-b-2 border-solid py-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-full">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={dog.image}
                    alt="dog"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-start">
                  <p className="ml-6 text-fontBlack font-bold text-middleTitle">
                    {dog.name}
                  </p>
                  <p className="ml-6 mt-2 text-fontBlack text-defalut">
                    {dog.age}세, {dog.type}
                  </p>
                </div>
                <div className="w-32 h-22 flex flex-col items-end justify-end">
                  <Button
                    style={
                      "w-full h-8 bg-bgMyPageButton text-fontBlack text-defalut mb-2"
                    }
                    text={"프로필 수정"}
                    onClick={() =>
                      myPageData.buttonDogNavigate(
                        `/mypage/dogprofile/${dog.id}`
                      )
                    }
                  />
                </div>
              </div>
            ))}
        {myPageData.myPageValue &&
          myPageData.myPageValue.dogs &&
          myPageData.myPageValue.dogs
            .filter((dog) => !dog.main)
            .map((dog) => (
              <div className="flex flex-row items-center w-full h-22 border-b-2 border-solid py-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-full">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={dog.image}
                    alt="dog"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start justify-start">
                  <p className="ml-6 text-fontBlack font-bold text-middleTitle">
                    {dog.name}
                  </p>
                  <p className="ml-6 mt-2 text-fontBlack text-defalut">
                    {dog.age}세, {dog.type}
                  </p>
                </div>
                <div className="h-22 flex flex-col items-end justify-end">
                  <Button
                    style={
                      "w-full h-8 bg-bgMyPageButton text-fontBlack text-defalut mb-2"
                    }
                    text={"프로필 수정"}
                    onClick={() =>
                      myPageData.buttonDogNavigate(
                        `/mypage/dogprofile/${dog.id}`
                      )
                    }
                  />
                  <Button
                    style={"w-22 h-8 bg-bgYellow text-fontBlack text-defalut"}
                    text={"대표 강아지 변경"}
                    onClick={() => myPageData.updateMainDog(dog.id)}
                  />
                </div>
              </div>
            ))}
      </div>
      <div className="flex w-full justify-end mt-4">
        <Button
          style={
            " w-full h-12 bg-bgBlack text-fontWhite text-fontBlack text-buttonFont font-bold"
          }
          text={"로그아웃"}
          onClick={myPageData.logout}
        ></Button>
      </div>
    </div>
  );
};
