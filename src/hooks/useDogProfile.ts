import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UpdateDogProfileInputType } from "../types/update";
import { patchDog, getDogInfo, deleteDog } from "../apis/MyPageApi";
import { useNavigate } from "react-router-dom";
import { deleteS3, upLoadS3 } from "./useS3";

export const useDogProfile = () => {
  const { dogId } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [updateDogValue, setUpdateDogValue] =
    useState<UpdateDogProfileInputType>({
      image: "",
      type: "",
      gender: true,
      neuter: true,
      tags: [],
    });

  const handleDogValueSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdateDogValue({
      ...updateDogValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "true") {
      setUpdateDogValue({
        ...updateDogValue,
        [e.target.name]: true,
      });
    } else {
      setUpdateDogValue({
        ...updateDogValue,
        [e.target.name]: false,
      });
    }
  };

  const handlePostDogImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdateDogValue({
          ...updateDogValue,
          image: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostDogTag = (content: string) => {
    const tagExists = updateDogValue.tags.some(
      (tag) => tag.content === content
    );
    const updatedTags = tagExists
      ? updateDogValue.tags.filter((tag) => tag.content !== content)
      : [...updateDogValue.tags, { content: content }];
    setUpdateDogValue({
      ...updateDogValue,
      tags: updatedTags,
    });
  };

  const handleDeleteDog = async () => {
    if (window.confirm("정말로 강아지를 삭제하시겠습니까?")) {
      deleteDog(dogId)
        .then((res) => {
          alert("강아지가 삭제되었습니다.");
          navigate("/mypage");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleUpdateDog = async () => {
    if (
      updateDogValue.image === "" ||
      updateDogValue.type === "" ||
      updateDogValue.tags.length === 0
    ) {
      alert("모든 정보를 입력해주세요.");
      return;
    }
    updateDog();
  };

  const updateDog = async () => {
    if (file) {
      deleteS3("엉큰남", `1111111111`);
      updateDogValue.image = await upLoadS3("엉큰남", "1111111111", file);
    }
    patchDog(Number(dogId), updateDogValue)
      .then((res) => {
        alert("강아지 정보가 변경되었습니다.");
        navigate("/mypage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUpdateDogInfo = () => {
    getDogInfo(Number(dogId))
      .then((res) => {
        const datas = res.data;
        setUpdateDogValue(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUpdateDogInfo();
  }, []);

  return {
    updateDogValue,
    handleDogValueSelect,
    handleRadioCheck,
    handlePostDogImage,
    handlePostDogTag,
    handleUpdateDog,
    handleDeleteDog,
  };
};
