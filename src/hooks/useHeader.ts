import { useNavigate } from "react-router-dom";

export const useHeader = () => {
  const navigate = useNavigate();
  const handleAlert = () => {
    navigate("/alert");
  };
  const handleBack = () => {
    window.history.back();
  };
  return { handleAlert, handleBack };
};
