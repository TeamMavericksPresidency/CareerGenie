import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { fonts } from "../utils/_var";

const Wrapper = styled.div`
  .row {
    margin: 1rem 0;
    .col {
      padding: 1rem;
      h1 {
        font-size: 1.3rem;
        font-family: ${fonts.$mainFont};
        text-align: center;
      }
    }
  }
`;

const Question = (props) => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <h1 id="quiz-question">{props.content}</h1>
        </div>
      </div>
    </Wrapper>
  );
};

Question.propTypes = {
  content: propTypes.string.isRequired,
};

export default Question;
