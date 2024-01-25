import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  SignInPage,
  SignUpPage,
  PostDogPageWithSignUp,
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
        <Route path="/postdog" element={<PostDogPageWithSignUp />} />
        <Route path="/" element={<MatchPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/profile" element={<UserProfileUpdatePage />} />
        <Route
          path="/mypage/dogprofile/:dogId"
          element={<DogProfileUpdatePage />}
        />
        <Route path="/mypage/postdog" element={<PostDogPage />} />
      </Routes>
    </BrowserRouter>
  );
};
