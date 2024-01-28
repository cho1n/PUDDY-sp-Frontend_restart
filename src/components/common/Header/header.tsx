import { useRef, useState } from "react";
import { arrow, alert, filter } from "../../../assets/Header";
import { useHeader } from "../../../hooks/useHeader";
import { Button } from "../Button/Button";
import { SignUpMiddleTitle } from "../Text";
import { FilterInputType } from "../../../types/filter";
import { SelectDogType } from "../SelectBox";
import { NeuterRadio } from "../Radio";
import { TagButtonList } from "../Button";
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
          <div className="w-80 h-340 bg-bgWhite flex flex-col items-center justify-center rounded-xl">
            <SignUpMiddleTitle text={"견종"} />
            <div className="flex w-full">
              <SelectDogType
                content={titleObject.filter.type}
                onChange={titleObject.onSelect}
              />
            </div>
            <SignUpMiddleTitle text={"중성화 유무"} />
            <NeuterRadio
              neuter={titleObject.filter.neuter}
              onChange={titleObject.onNeuterCheck}
            />
            <SignUpMiddleTitle text={"태그"} />
            <TagButtonList
              onChange={titleObject.onChangeTag}
              tags={titleObject.filter.tags}
            />
            <div className="flex flex-row">
              <Button
                style={"bg-bgBlack text-fontWhite text-ButtonFont mr-2.5"}
                text={"취소하기"}
                onClick={() => setModalOpen(false)}
              />
              <Button
                style={"bg-bgYellow text-fontBlack text-ButtonFont"}
                text={"적용하기"}
                onClick={() => setModalOpen(false)}
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
              src={filter}
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
    </div>
  );
};
