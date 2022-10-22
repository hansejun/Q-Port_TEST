import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProfileEdit from '../pages/ProfileEdit';
import Question from '../pages/Question';
import WriteAnswer from '../pages/WriteAnswer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/questions/:questionId/write" element={<WriteAnswer />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
