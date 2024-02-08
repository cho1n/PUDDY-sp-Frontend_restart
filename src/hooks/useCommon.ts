import { useNavigate } from "react-router-dom";
import { ReissueToken } from "../apis/SignApi";
export const useReissueToken = () => {
  const navigate = useNavigate();
  const getReissueToken = (route: string) => {
    ReissueToken()
      .then((res) => {
        const accessToken = res.headers["authorization"] as string;
        const refreshToken = res.headers["reauthorization"] as string;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate(`${route}`);
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 403) {
          alert("로그인이 필요합니다.");
          navigate("/");
        }
      });
  };

  return { getReissueToken };
};
