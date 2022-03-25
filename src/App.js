import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import ShoeDetailPage from "./pages/shoeDetail/shoedetail.component";
import ShoePage from "./pages/shopPage/shop.component";
import Header from "./components/header/header.component";
import SignIn from "./pages/Auth Page/SignIn/sign-in.component";
import SignUp from "./pages/Auth Page/SignUp/SignUp.component";
import ForgetPassword from "./pages/Auth Page/ForgetPassword/forget-password.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/sneakers/:sneakerId" element={<ShoeDetailPage />} />
        <Route path="/collections" element={<ShoePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
