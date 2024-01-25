import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  SignInPage,
  SignUpPage,
  PostDogPage,
  MatchPage,
  MyPage,
  UserProfileUpdatePage,
  DogProfileUpdatePage,
} from "../pages";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/postdog" element={<PostDogPage />} />
        <Route path="/" element={<MatchPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/profile" element={<UserProfileUpdatePage />} />
        <Route path="/mypage/dogprofile" element={<DogProfileUpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
};
