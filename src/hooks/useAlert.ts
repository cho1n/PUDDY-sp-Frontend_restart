import { useEffect, useState } from "react";
import { AlertListType } from "../types/alert";
import { getMatch } from "../apis/MatchApi";
import { useNavigate } from "react-router-dom";

export const useAlert = () => {
  const navigate = useNavigate();
  const [alertValue, setAlertValue] = useState<AlertListType>({
    matches: [],
  });
  useEffect(() => {
    getMatch()
      .then((res) => {
        console.log(res.data);
        setAlertValue(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          alert("로그인이 필요합니다.");
          navigate("/");
        }
      });
  }, []);
  const goToProfile = (personId: number) => {
    console.log(personId);
  };

  return { alertValue, goToProfile };
};
