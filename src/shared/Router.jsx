import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ProfileEdit from "../pages/ProfileEdit";
import QuestionForm from "../pages/QuestionForm";
import QuestionList from "../pages/QuestionList";
import QuestionDetail from "../pages/QuestionDetail";
import WriteAnswer from "../pages/WriteAnswer";
import QuestionEdit from "../pages/QuestionEdit";
import AnswerEdit from "../pages/AnswerEdit";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/edit" element={<ProfileEdit />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/questions/form" element={<QuestionForm />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
        <Route path="/questions/:id/write" element={<WriteAnswer />} />
        <Route path="/questions/:id/edit" element={<QuestionEdit />} />
        <Route path="/questions/answers/:id/edit" element={<AnswerEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
