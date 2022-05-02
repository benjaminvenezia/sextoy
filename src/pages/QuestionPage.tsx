import { Question, DefaultButton } from "../components";
import styled from "styled-components";
import questions from "../utils/questions";

const QuestionPage = () => {
  return (
    <Wrapper>
      {questions.map((q) => {
        return <Question label={q.label} />;
      })}

      <div>
        <DefaultButton> précédent </DefaultButton>
        <DefaultButton> suivant </DefaultButton>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 5%;
  background-color: var(--primary-50);
  border: 1px solid black;
`;

export default QuestionPage;
