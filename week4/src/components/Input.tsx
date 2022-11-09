import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface InputProps {
  handleHistory: (input: string) => void;
}
function Input(props: InputProps) {
  const { handleHistory } = props;
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleHistory(input);
      navigate(`/search/${input}`, {
        state: {
          username: input,
        },
      });
    }
  };
  return (
    <Root>
      <h1>GIthub Profile Finder</h1>
      <input
        type="text"
        placeholder="Github Username"
        onChange={handleInput}
        onKeyUp={handleSearch}
      />
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
  & > input {
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;
