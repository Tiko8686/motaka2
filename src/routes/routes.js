import { HomePage } from "../components/homePage/HomePage";
import { SignUp } from "../components/signUp/SignUp";
import { SignIn } from "../components/signIn/SignIn";
import Profile from "../components/Profile/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../components/Aboutus";
import Categories from "../components/categories/Categories";

function AllRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AllRoutes;
