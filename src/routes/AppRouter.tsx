import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  SignInPage,
  SignUpPage,
  PostDogPage,
  MatchPage,
  AlertPage,
} from "../pages";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/postdog" element={<PostDogPage />} />
        <Route path="/match" element={<MatchPage />} />
        <Route path="/alert" element={<AlertPage />} />
      </Routes>
    </BrowserRouter>
  );
};
