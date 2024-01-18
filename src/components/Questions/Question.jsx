import React, { useState } from "react";
import "material-symbols";
import "./Question.css";

const Question = ({ element, id }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div
      className={`question-container question-container-${id}`}
      onClick={toggleAnswer}
    >
      <div className="que-container">
        {element.que}
        <span
          className={`material-symbols-outlined ${
            isAnswerVisible ? "rotate-icon" : "rotate-icon-again "
          }`}
        >
          keyboard_arrow_down
        </span>
      </div>
      <p className={`${isAnswerVisible ? "show-answer" : "not-show"}`}>
        {element.ans}
      </p>
    </div>
  );
};

export default Question;
