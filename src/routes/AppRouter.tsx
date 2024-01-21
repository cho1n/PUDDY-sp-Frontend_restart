import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignInPage, SignUpPage, PostDogPage, MatchPage } from "../pages";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/postdog" element={<PostDogPage />} />
        <Route path="/" element={<MatchPage />} />
      </Routes>
    </BrowserRouter>
  );
};
