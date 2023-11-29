import React from "react";
import styled from "styled-components";

const App = () => {
  const [number, setNumber] = React.useState<number>(0);
  const [value, setValue] = React.useState<string>("");
  const [isCorrect, setIsCorrect] = React.useState<string>("");
  const [correctAnswersNumber, setCorrectAnswersNumber] =
    React.useState<number>(0);

  const mockQuestions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct_answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Mercury"],
      correct_answer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo",
      ],
      correct_answer: "Leonardo da Vinci",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correct_answer: "Blue Whale",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "India", "South Korea"],
      correct_answer: "Japan",
    },
  ];

  const handleSubmit = () => {
    setNumber(number + 1);

    if (value === mockQuestions[number].correct_answer) {
      setCorrectAnswersNumber(correctAnswersNumber + 1);
      setIsCorrect("correct");
    } else {
      setIsCorrect("incorrect");
    }
  };

  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };

  const isFinished = () => {
    if (number > mockQuestions.length - 1) return true;
    else return false;
  };

  return (
    <StyledApp>
      {!isFinished() ? (
        <>
          <div className="flex justify-between items-center">
            <div className="feedback-rate">
              {isCorrect === "correct" ? (
                <p className="text-[#4dce41] ">Prevous quizz: Correct!</p>
              ) : isCorrect === "incorrect" ? (
                <p className="text-[#ea575b] ">Prevous quizz: Incorrect!</p>
              ) : (
                ""
              )}
            </div>
            <p className="text-center mb-2">
              Question {number + 1}/{mockQuestions.length}
            </p>
          </div>
          <p className="mb-2 text-[18px]">
            Question: {mockQuestions[number].question}
          </p>
          {mockQuestions[number].options.map((item, index) => (
            <div key={index} className="option flex items-center py-1">
              <input
                onChange={handleInputChange}
                type="radio"
                name="option"
                value={item}
                id={`option-${index}`}
              />
              <label htmlFor={`option-${index}`}>{item}</label>
            </div>
          ))}

          <div className="flex justify-end">
            <button className="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </>
      ) : (
        <div className="feedback">
          <p className="text-[20px] text-center mb-4">You finished Quizzes!</p>
          <p>
            Correct answers: {correctAnswersNumber}/{mockQuestions.length}
          </p>
        </div>
      )}
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background-color: #fff;
  width: min(600px, 100%);
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 20px;
  border: 1px solid silver;
  border-radius: 4px;
  font-weight: bold;

  .option {
    & input[type="radio"] {
      width: 17px;
      height: 17px;
      margin-right: 5px;
    }
  }

  .button {
    color: #fff;
    font-weight: bold;
    background-color: #2e8aeb;
    padding: 4px 20px;
    border-radius: 4px;
    transition: 150ms all;

    &:hover {
      background-color: #296bb0;
    }
  }
`;

export default App;
