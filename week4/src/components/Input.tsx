import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface InputProps {
  addHistory: (input: string) => void;
  handleHistory: (value: string) => void;
  children: React.ReactNode;
}
function Input(props: InputProps) {
  const { addHistory, handleHistory, children } = props;
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setInput("");
      addHistory(input);
      handleHistory("close");
      moveToSearch();
    }
  };

  const moveToSearch = () => {
    navigate(`/search/${input}`, {
      state: {
        username: input,
      },
    });
  };

  return (
    <Root>
      <h1>GIthub Profile Finder</h1>
      <InputWrapper>
        <input
          id="active"
          type="text"
          value={input}
          placeholder="Github Username"
          onChange={handleInput}
          onKeyUp={handleSearch}
          onMouseDown={() => handleHistory("open")}
        />
        {children}
      </InputWrapper>
    </Root>
  );
}

export default Input;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;

  & > h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  & > input {
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;
