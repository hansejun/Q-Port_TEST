import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import QContainer from "../components/Question/QContainer";

function QuestionDetail() {
  return (
    <Layout>
      <Wrapper>
        <QContainer />
      </Wrapper>
    </Layout>
  );
}
export default QuestionDetail;

const Wrapper = styled.div``;
