import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignInPage, SignUpPage, PostDogPage } from "../pages";
import { RecommendWalkRoadPage } from "../pages/RecommendWalkRoadPage.tsx";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/postdog" element={<PostDogPage />} />
        <Route path="/find-walk-road" element={<RecommendWalkRoadPage />} />
      </Routes>
    </BrowserRouter>
  );
};
