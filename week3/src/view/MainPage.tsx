import { useRef, useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import { quiz } from "../constant/quiz";
import { checkRandomIndex } from "../constant/validations";

function MainPage() {
  const quizIndexArray = useRef<number[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [modalContent, setModalContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { src, choices, answer } = quiz[currentQuiz];

  const randomIndex = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    // 이미 나왔던 random 인덱스라면 다시 random 인덱스 구하기
    if (checkRandomIndex(quizIndexArray.current, randomNumber)) {
      randomIndex();
    } else {
      setCurrentQuiz(randomNumber);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const userChoice = quiz[currentQuiz].choices[index];

    if (userChoice === answer) {
      // 정답
      setScore((prev) => prev + 1);
      setModalContent("정답입니다!");
    } else {
      setModalContent("틀렸습니다;");
    }
    showNextQuiz();
  };

  const showNextQuiz = () => {
    if (quizIndexArray.current.length === quiz.length) {
      finishGame();
    } else {
      setShowModal((prev) => !prev);
      setTimeout(() => setShowModal((prev) => !prev), 500);
      randomIndex();
    }
  };

  const finishGame = () => {
    setShowModal(true);
    setModalContent("총 " + score + "개 맞추셨어요!");
  };

  const restartGame = () => {
    quizIndexArray.current = [];
    setShowModal(false);
    randomIndex();
    setScore(0);
  };

  return (
    <StyledRoot>
      {showModal && <Modal modalContent={modalContent} />}
      <StyledHeader isCorrect={modalContent === "정답입니다!"}>
        <h1>구끼퀴즈</h1>
        <div>
          <div>score : {score}점</div>
        </div>
      </StyledHeader>

      <StyledMain>
        <img src={src} alt="quiz" />
        <StyledChoices>
          {choices.map((choice, index) => (
            <StyledChoice key={choice} onClick={(e) => checkAnswer(e, index)}>
              {choice}
            </StyledChoice>
          ))}
        </StyledChoices>
      </StyledMain>

      <StyledFooter>
        <StyledRestartButton onClick={restartGame}>
          다시하기
        </StyledRestartButton>
      </StyledFooter>
    </StyledRoot>
  );
}

export default MainPage;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  color: #fff;
`;

const StyledHeader = styled.header<{ isCorrect: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: #313131;

  & > h1 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    animation: ${({ isCorrect }) => isCorrect && "scale 1s ease"};
  }
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 170px);
  & > img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
`;

const StyledChoices = styled.div`
  display: flex;
  margin-top: 70px;
`;

const StyledChoice = styled.div`
  padding: 5px 7px;
  background-color: #313131;
  box-shadow: -1px -1px 3px #fff;
  border-radius: 10px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #313131;
`;

const StyledRestartButton = styled.button`
  color: #fff;
  padding: 5px 7px;
  background-color: #313131;
  box-shadow: -1px -1px 3px #fff;
  border: none;
  border-radius: 10px;
`;
