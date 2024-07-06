import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomeIndex from "./Pages/Home/HomeIndex";
import Footer from "./Components/Footer/Footer";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import LoginPage from "./Components/Navbar/LoginPage/LoginPage";
import SignupPage from "./Components/Navbar/SignupPage/SignupPage";
import Guest from "./Pages/GuestPage/Guest";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomeIndex />} />
        <Route path="*" element={<ErrorPage />} />

        {/* <Route path="guest" element={<Guest />}>
          <Route path="loginPage" element={<LoginPage />} />
          <Route path="signupPage" element={<SignupPage />} />
        </Route> */}

        <Route path="loginPage" element={<LoginPage />} />
        <Route path="signupPage" element={<SignupPage />} />
        <Route path="cart/:CartItems" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
