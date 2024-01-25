import { UpdateDogProfileInputType } from "../../types/update";
import { Button, TagButtonList } from "../common/Button";
import { GenderRadio, NeuterRadio } from "../common/Radio";
import { SelectDogType } from "../common/SelectBox";
import { SignUpMiddleTitle } from "../common/Text";
import dogPencil from "../../assets/MyPage/DogPencil.svg";

interface DogProfileUpdateProps {
  UpdateDogValue: UpdateDogProfileInputType;
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onGenderCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNeuterCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTag: (content: string) => void;
  onDelete: () => void;
  onClick: () => void;
}

export const DogProfileUpdateTemplate = (props: DogProfileUpdateProps) => {
  return (
    <div className=" flex-col px-4 w-full max-h-haveHeader overflow-auto scrollbar-hide">
      <SignUpMiddleTitle text={"프로필 이미지"} />
      <div className="flex justify-center w-f mb-2">
        {props.UpdateDogValue.image === "" ? (
          <div className="bg-cover w-36 h-45" style={{}}>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpg, image/jpeg"
              onChange={props.onChangeImage}
              className="opacity-0 w-36 h-36"
            ></input>
          </div>
        ) : (
          <div
            className="bg-cover w-36 h-60 rounded-xl"
            style={{
              backgroundImage: `url(${props.UpdateDogValue.image})`,
              backgroundPosition: "center",
            }}
          >
            <div className="w-full mt-56 flex items-center justify-end ml-5">
              <div
                className="w-10 h-10 rounded-full text-fontBlack text-default "
                style={{
                  backgroundImage: `url(${dogPencil})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <input
                  type="file"
                  name="image"
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={props.onChangeImage}
                  className="opacity-0 w-10 h-10"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <SignUpMiddleTitle text={"견종"} />
      <div className="flex w-full">
        <SelectDogType
          content={props.UpdateDogValue.type}
          onChange={props.onSelect}
        />
      </div>
      <SignUpMiddleTitle text={"성별"} />
      <GenderRadio
        gender={props.UpdateDogValue.gender}
        onChange={props.onGenderCheck}
      />
      <SignUpMiddleTitle text={"중성화 유무"} />
      <NeuterRadio
        neuter={props.UpdateDogValue.neuter}
        onChange={props.onNeuterCheck}
      />
      <SignUpMiddleTitle text={"반려동물을 소개해주세요."} />
      <TagButtonList onChange={props.onChangeTag} />
      <Button
        style="bg-bgBlack text-fontWhite text-buttonFont mt-2.5 h-12 w-full"
        text={"프로필 삭제"}
        onClick={props.onClick}
      />
      <Button
        style="bg-bgYellow text-fontBlack text-buttonFont mt-2.5 mb-8 h-12 w-full"
        text={"수정 완료"}
        onClick={props.onClick}
      />
    </div>
  );
};
