import { HomePage } from "../components/homePage";

import Verification from "../components/verification/Verification";
import { SignUp } from "../components/signUp/SignUp";
import { SignIn } from "../components/signIn/SignIn";
import Profile from "../components/Profile/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AllRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="post" element={<Verification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AllRoutes;
