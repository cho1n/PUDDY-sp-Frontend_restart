import { useCallback, useEffect, useState } from "react";
import { MatchListType } from "../types/match";
import { getRandomMatch, postmatch } from "../apis/MatchApi";
import { useNavigate } from "react-router-dom";
import { getImage } from "./useS3";

export const useMatch = () => {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState<number>(1);
  const [matchListValue, setMatchListValue] = useState<MatchListType>({
    pets: [],
  });
  useEffect(() => {
    getRandomMatch(pageNum)
      .then((res) => {
        setMatchListValue(res.data);
        matchListValue.pets.map((pet) => {
          getImage(pet.dog.image).then((res) => {
            pet.dog.image = res;
          });
        });
        console.log(pageNum);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          alert("로그인이 필요합니다.");
          navigate("/");
        }
      });
  }, [pageNum]);
  const handleMatchCancle = () => {
    alert("ok");
    // setPageNum(pageNum + 1);
  };
  const handlepostMatch = useCallback(
    (personId: number) => {
      console.log(personId);
      postmatch(personId)
        .then((res) => {
          alert("매칭신청을 전송하였습니다.");
          console.log(res);
          //   window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [pageNum]
  );

  return { matchListValue, handleMatchCancle, handlepostMatch };
};
