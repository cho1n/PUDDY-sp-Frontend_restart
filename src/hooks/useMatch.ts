import { useCallback, useEffect, useState } from "react";
import { MatchListType } from "../types/match";
import { getRandomMatch, postmatch } from "../apis/MatchApi";
import { useNavigate } from "react-router-dom";
import { ReissueToken } from "../apis/SignApi";

export const useMatch = () => {
  const navigate = useNavigate();
  const [matchListValue, setMatchListValue] = useState<MatchListType>({
    pets: [],
  });
  useEffect(() => {
    getRandomMatch()
      .then((res) => {
        setMatchListValue(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          ReissueToken()
            .then((res) => {
              const accessToken = res.headers["authorization"] as string;
              const refreshToken = res.headers["reauthorization"] as string;
              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("refreshToken", refreshToken);
              navigate("/match");
            })
            .catch((err) => {
              if (err.response.status === 400) {
                alert("로그인이 필요합니다.");
                navigate("/");
              }
            });
        }
      });
  }, []);
  const handleMatchCancel = () => {
    alert("ok");
  };
  const handlepostMatch = useCallback((personId: number) => {
    console.log(personId);
    postmatch(personId)
      .then((res) => {
        alert("매칭신청을 전송하였습니다.");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    matchListValue,
    handleMatchCancel,
    handlepostMatch,
  };
};
