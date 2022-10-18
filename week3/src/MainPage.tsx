import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { quiz } from "./constant/quiz";

function MainPage() {
  const quizIndexArray = useRef<number[]>([]);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [modalContent, setModalContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { src, choices, answer } = quiz[currentQuiz];

  useEffect(() => {
    randomIndex();
  }, [currentQuiz]);

  const randomIndex = () => {
    let randomNumber = Math.floor(Math.random() * 5);
    if (!quizIndexArray.current.includes(randomNumber)) {
      setCurrentQuiz(randomNumber);
      quizIndexArray.current.push(randomNumber);
    }
    console.log(currentQuiz);
  };

  const checkAnswer = (e) => {
    const userChoice = e.target.innerText;
    if (userChoice === answer) {
      // 정답
      setScore((prev) => prev + 1);
      setModalContent("정답입니다!");
    } else {
      setModalContent("틀렸습니다.");
    }
    setShowModal((prev) => !prev);
    setTimeout(() => setShowModal((prev) => !prev), 2000);
  };

  return (
    <StyledRoot>
      {showModal && (
        <StyledModal>
          <span>{modalContent}</span>
        </StyledModal>
      )}
      <StyledHeader>
        <h1>구끼퀴즈</h1>
        <div>
          <div>score : {score}점</div>
        </div>
      </StyledHeader>

      <StyledMain>
        <img src={src} alt="quiz" />
        <StyledChoices>
          {choices.map((choice) => (
            <StyledChoice key={choice} onClick={checkAnswer}>
              {choice}
            </StyledChoice>
          ))}
        </StyledChoices>
      </StyledMain>

      <StyledFooter>
        <StyledRestartButton>다시하기</StyledRestartButton>
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

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  color: #232323;
  background-color: #fff;
  box-shadow: -1px -1px 10px #c1c1c1;
  border-radius: 15px;
  transform: translate(-50%, -50%);
`;

const StyledHeader = styled.header`
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
