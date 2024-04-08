import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";
import { media } from "../utils/_media-queries";

const Wrapper = styled.div`
  margin: 1em 1em;
  z-index: 1;
  .row {
    margin: 0;
    ul {
      padding: 1em 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      flex-grow: 1;
      ${media.largerPhone`margin: 0 .8em;`};
      ${media.tablet`flex-direction: row; padding-right: 1.5em;`};
      ${media.laptop`margin-top: 1rem;`};
    }
  }
`;

const Quiz = (props) => {
  const renderAnswerOptions = (key) => {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  };
  return (
    <Wrapper key={props.questionId}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <div className="w-100" />
      <Question content={props.question} />
      <div className="w-100" />
      <div className="row">
        <ul>{props.answerOptions.map(renderAnswerOptions)}</ul>
      </div>
    </Wrapper>
  );
};

Quiz.propTypes = {
  answer: propTypes.string.isRequired,
  answerOptions: propTypes.array.isRequired,
  counter: propTypes.number.isRequired,
  question: propTypes.string.isRequired,
  questionId: propTypes.number.isRequired,
  questionTotal: propTypes.number.isRequired,
  onAnswerSelected: propTypes.func.isRequired,
};

export default Quiz;
