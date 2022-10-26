import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import ModalPortal from "../components/ModalPortal";
import { quizList } from "../constants/quizList";

function MainPage() {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const checkAnswer = (e: React.MouseEvent<HTMLLIElement>) => {
    let timer = setTimeout(() => setShowModal(false), 500);

    if (e.currentTarget.innerText === quizList[currentIndex].answer) {
      setScore((prev) => prev + 1);
      if (currentIndex === quizList.length - 1) {
        finishQuiz(timer);
      } else {
        showNextQuiz();
        setModalContent("맞췄어요!!");
      }
    } else {
      setModalContent("아니에요..😣");
    }
    setShowModal(true);
  };

  const showNextQuiz = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const finishQuiz = (timer: ReturnType<typeof setTimeout>) => {
    setModalContent("퀴즈 끝👋");
    clearTimeout(timer);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setModalContent("");
    setShowModal(false);
  };

  return (
    <StyledRoot>
      <StyledHeader>
        <h1>너누구야</h1>
        <p>score: {score}</p>
      </StyledHeader>

      <ModalPortal>{showModal && <Modal content={modalContent} />}</ModalPortal>

      <StyledMain>
        <StyledQuiz>
          <img src={quizList[currentIndex].src} alt="quiz image" />
          <StyledAnswerList>
            {quizList[currentIndex].answerList.map((answer: string) => (
              <StyledAnswer key={answer} onClick={checkAnswer}>
                {answer}
              </StyledAnswer>
            ))}
          </StyledAnswerList>
        </StyledQuiz>
      </StyledMain>

      {modalContent === "퀴즈 끝👋" && (
        <StyledReplayButton onClick={resetQuiz}>다시하기</StyledReplayButton>
      )}
    </StyledRoot>
  );
}

export default MainPage;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #232323;
  & > h1 {
    font-size: 24px;
    font-weight: 700;
  }
  & > p {
    font-size: 20px;
    font-weight: 500;
  }
`;
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;
const StyledQuiz = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
  }
`;
const StyledAnswerList = styled.ul`
  display: flex;
  margin-top: 20px;
`;
const StyledAnswer = styled.li`
  padding: 3px 5px;
  background-color: #b5ffc6;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 7px;
  }
`;
const StyledReplayButton = styled.button`
  position: absolute;
  bottom: 20px;
  width: 100%;
  border: none;
  background-color: #232323;
  padding: 10px 7px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  z-index: 9;
`;
