import { useCallback, useEffect, useState } from "react";
import { MatchListType, FilterDogType } from "../types/match";
import { getRandomMatch, postmatch } from "../apis/MatchApi";
import { useNavigate } from "react-router-dom";
import { ReissueToken } from "../apis/SignApi";
import useMatchListStore from "../store/useMatchListStore";

export const useMatch = () => {
  const navigate = useNavigate();
  const { setMatchListValue } = useMatchListStore();
  const [filterValue, setFilterValue] = useState<FilterDogType>({
    type: "",
    neuter: null,
    tags: [],
  });
  const [filter, setFilter] = useState<FilterDogType>({
    type: "",
    neuter: null,
    tags: [],
  });

  const handleDogTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "true") {
      setFilter({
        ...filter,
        [e.target.name]: true,
      });
    } else if (e.target.value === "false") {
      setFilter({
        ...filter,
        [e.target.name]: false,
      });
    } else {
      setFilter({
        ...filter,
        [e.target.name]: null,
      });
    }
  };

  const handlePostDogTag = (content: string) => {
    const tagExists = filterValue.tags.some((tag) => tag.content === content);
    if (tagExists) {
      setFilter({
        ...filter,
        tags: filter.tags.filter((tag) => tag.content !== content),
      });
    } else {
      setFilter({
        ...filter,
        tags: [...filter.tags, { content: content }],
      });
    }
  };

  useEffect(() => {
    getRandomMatch(filterValue)
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
  }, [filterValue]);

  const handleMatchCancel = () => {
    alert("ok");
  };
  const handlepostMatch = useCallback((personId: number) => {
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
    filter,
    handleMatchCancel,
    handlepostMatch,
    handleDogTypeSelect,
    handleRadioCheck,
    handlePostDogTag,
    setFilterValue,
  };
};
