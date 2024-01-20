import { useEffect, useState } from "react";
import { MatchListType } from "../types/match";
import { getRandomMatch } from "../apis/MatchApi";
import AWS from "aws-sdk";
import { useNavigate } from "react-router-dom";

export const useMatch = () => {
  const navigate = useNavigate();
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
    getRandomMatch()
      .then((res) => {
        setMatchListValue(res.data);
        matchListValue.pets.map((pet) => {
          getImage(pet.dog.image).then((res) => {
            pet.dog.image = res;
          });
        });
      })
      .catch((err) => {
        if (err.response.status === 403) {
          alert("로그인이 필요합니다.");
          navigate("/signin");
        }
      });
  }, []);
  return { matchListValue };
};
