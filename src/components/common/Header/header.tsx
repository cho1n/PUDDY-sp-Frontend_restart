import { useRef, useState } from "react";
import { arrow, alert, filters } from "../../../assets/Header";
import { useHeader } from "../../../hooks/useHeader";
import { Button } from "../Button/Button";
import { SignUpMiddleTitle } from "../Text";
import { FilterInputType } from "../../../types/filter";
import { SelectDogType } from "../SelectBox";
import { NeuterRadio } from "../Radio";
import { TagButtonList } from "../Button";
import { useMatch } from "../../../hooks";

interface Title {
  title: string;
  filter: FilterInputType;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onNeuterCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTag: (content: string) => void;
}

export const Header = (titleObject: Title) => {
  const { handleAlert, handleBack } = useHeader();
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();
  const {
    filter,
    handleDogTypeSelect,
    handleRadioCheck,
    handlePostDogTag,
    setFilterValue,
  } = useMatch();

  return (
    <div className="flex px-4 w-full h-16 px-1 py-2 items-center gap-1 shrink-0">
      {modalOpen && (
        <div
          className="w-393 h-donHave fixed top-0 left-0 bg-black bg-opacity-70 z-50 flex justify-center items-center"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className="w-80 h-340 bg-bgWhite flex flex-col items-start justify-center rounded-xl">
            <div className="flex w-full flex-col px-4">
              <SignUpMiddleTitle text={"견종"} />
              <SelectDogType
                content={filter.type}
                onChange={handleDogTypeSelect}
              />
            </div>
            <div className="flex w-full flex-col px-4">
              <SignUpMiddleTitle text={"중성화 유무"} />
              <NeuterRadio neuter={filter.neuter} onChange={handleRadioCheck} />
            </div>
            <div className="flex w-full flex-col px-4">
              <SignUpMiddleTitle text={"태그"} />
              <TagButtonList onChange={handlePostDogTag} tags={filter?.tags} />
            </div>

            <div className="flex flex-row w-full justify-center mt-4">
              <Button
                style={"bg-bgBlack text-fontWhite text-ButtonFont mr-2.5"}
                text={"취소하기"}
                onClick={() => {
                  setFilterValue({
                    type: "",
                    neuter: null,
                    tags: [],
                  });
                  setModalOpen(false);
                }}
              />
              <Button
                style={"bg-bgYellow text-fontBlack text-ButtonFont"}
                text={"적용하기"}
                onClick={() => {
                  setFilterValue({
                    type: filter?.type,
                    neuter: filter?.neuter,
                    tags: filter?.tags,
                  });
                  setModalOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
      {titleObject.title !== "강아지 매칭" && (
        <div className="flex justify-center items-center gap-2.5 ">
          <div
            className="flex justify-center items-center gap-2.5"
            onClick={() => handleBack()}
          >
            <img src={arrow} className="w-6 h-6" alt="arrow" />
          </div>
        </div>
      )}
      <p className="flex flex-1 items-center h-6 leading-7 font-normal text-bigTitle text-left">
        {titleObject.title}
      </p>
      {titleObject.title === "강아지 매칭" && (
        <>
          <div className="flex justify-center items-center px-2 gap-2.5">
            <img
              src={filters}
              className="w-6 h-6"
              alt="filter"
              onClick={() => setModalOpen(true)}
            />
          </div>
          <div
            className="flex justify-center items-center gap-2.5"
            onClick={() => handleAlert()}
          >
            <img src={alert} className="w-6 h-6" alt="alert" />
          </div>
        </>
      )}
      {titleObject.title === "커뮤니티" && (
        <>
          <div
            className="flex justify-center items-center gap-2.5"
            onClick={() => handleWritePost()}
          >
            <img src={plus} className="w-6 h-6" alt="alert" />
          </div>
        </>
      )}
    </div>
  );
};
