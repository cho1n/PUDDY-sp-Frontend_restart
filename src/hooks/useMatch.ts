import { useCallback, useEffect, useState } from "react";
import { MatchListType } from "../types/match";
import { getRandomMatch, postmatch } from "../apis/MatchApi";
import AWS from "aws-sdk";
import { useNavigate } from "react-router-dom";

export const useMatch = () => {
  const navigate = useNavigate();
  const [pageNum, setPageNum] = useState<number>(1);
  const config = {
    bucketName: import.meta.env.VITE_BUCKET_NAME,
    region: import.meta.env.VITE_REGION,
    accessKeyId: import.meta.env.VITE_ACCESS,
    secretAccessKey: import.meta.env.VITE_SECRET,
  };
  AWS.config.update({
    region: config.region,
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
  });
  const [matchListValue, setMatchListValue] = useState<MatchListType>({
    pets: [],
  });
  const s3 = new AWS.S3();
  const getImage = async (key: string) => {
    const params = {
      Bucket: config.bucketName,
      Key: key,
    };
    const url = await s3.getSignedUrlPromise("getObject", params);
    return url;
  };
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
          navigate("/signin");
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
