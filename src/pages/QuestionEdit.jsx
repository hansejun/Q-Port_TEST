import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";

function QuestionEdit() {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  //const {qeustions}
  useEffect(() => {
    setValue();
  }, []);
  return <Layout>QuestionEdit</Layout>;
}
export default QuestionEdit;
