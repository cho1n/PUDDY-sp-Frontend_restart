import { useCallback, useEffect, useState } from "react";
import { getPersonDetail, postmatch } from "../apis/MatchApi";
import { MatchType } from "../types/match";
import { useParams } from "react-router-dom";
import { useReissueToken } from "./useCommon";

export const usePersonDetail = () => {
  const { getReissueToken } = useReissueToken();
  const [personDetailValue, setPersonDetailValue] = useState<MatchType>({
    id: 0,
    login: "",
    gender: true,
    age: 0,
    mainAddress: "",
    dog: {
      name: "",
      gender: true,
      image: "",
      type: "",
      age: 0,
      tags: [],
    },
  });
  const { personId } = useParams();

  useEffect(() => {
    handleGetPersonDetail(Number(personId));
  }, []);

  const handleGetPersonDetail = (Id: number) => {
    getPersonDetail(Id)
      .then((res) => {
        setPersonDetailValue(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          getReissueToken("/persondetail");
        }
      });
  };

  const handleMatchCancel = () => {
    alert("ok");
  };
  const handlepostMatch = useCallback((Id: number) => {
    postmatch(Id)
      .then(() => {
        alert("매칭신청을 전송하였습니다.");
      })
      .catch((err) => {
        if (err.response.status === 403) {
          getReissueToken("/persondetail");
        } else if (err.response.status === 404) {
          alert("존재하지 않는 유저입니다.");
        }
      });
  }, []);

  return { personDetailValue, handleMatchCancel, handlepostMatch };
};
