import { useNavigate } from "react-router-dom";

export const useHeader = () => {
  const navigate = useNavigate();
  const handleAlert = () => {
    navigate("/alert");
  };
  const handleWritePost = () => {
    navigate("/post-write");
  };
  const handleWriteTrail = (id: number) => {
    navigate(`/trail-write/${id}`);
  };
  const handleBack = () => {
    window.history.back();
  };
  return { handleAlert, handleWritePost, handleWriteTrail, handleBack };
};
