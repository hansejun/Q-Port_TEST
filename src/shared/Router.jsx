import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import QuestionDetail from "../pages/QuestionDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/question/:id" element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
