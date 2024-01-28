import { useCallback, useEffect, useState } from "react";
import { getPersonDetail, postmatch } from "../apis/MatchApi";
import { MatchType } from "../types/match";
import { ReissueToken } from "../apis/SignApi";
import { useNavigate } from "react-router-dom";
import usePersonIdStore from "../store/usePersonIdStore";

export const usePersonDetail = () => {
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
  const { PersonId } = usePersonIdStore();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetPersonDetail(PersonId);
    console.log(PersonId);
  }, []);

  const handleGetPersonDetail = (Id: number) => {
    getPersonDetail(Id)
      .then((res) => {
        console.log(res.data);
        setPersonDetailValue(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 403) {
          ReissueToken()
            .then((res) => {
              const accessToken = res.headers["authorization"] as string;
              const refreshToken = res.headers["reauthorization"] as string;
              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("refreshToken", refreshToken);
              navigate("/alert");
            })
            .catch((err) => {
              if (err.response.status === 400) {
                alert("로그인이 필요합니다.");
                navigate("/");
              }
            });
        }
      });
  };

  const handleMatchCancel = () => {
    alert("ok");
  };
  const handlepostMatch = useCallback((Id: number) => {
    postmatch(Id)
      .then((res) => {
        alert("매칭신청을 전송하였습니다.");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { personDetailValue, handleMatchCancel, handlepostMatch };
};
