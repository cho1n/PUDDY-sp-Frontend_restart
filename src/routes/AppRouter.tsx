import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";
import { PostDogPage } from "../pages/PostDogPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/postdog" element={<PostDogPage />} />
      </Routes>
    </BrowserRouter>
  );
};
