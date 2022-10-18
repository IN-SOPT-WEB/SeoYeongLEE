import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MainPage from "./MainPage";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        background-color: #242424;
        font-family: 'Pretendard';
    }
    *{
        font-family: 'Pretendard';
    }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MainPage />
    </>
  );
}

export default App;
