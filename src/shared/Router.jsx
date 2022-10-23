import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import QuestionDetail from "../pages/QuestionDetail";
import ProfileEdit from "../pages/ProfileEdit";
import Question from "../pages/Question";
import WriteAnswer from "../pages/WriteAnswer";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/questions/:id/write" element={<WriteAnswer />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
