import { useState } from "react";
import { useLocation } from "react-router-dom";

import Input from "./Input";
import Profile from "./Profile";
import History from "./History";

function Search() {
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const location = useLocation();

  const addHistory = (input: string) => {
    setHistory((prev) => [...new Set([...prev, input])]);
  };

  const handleHistory = (value: string) => {
    value === "open" ? setShowHistory(true) : setShowHistory(false);
  };

  const deleteHistory = (idx: number) => {
    setHistory((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
  };
  return (
    <>
      <Input addHistory={addHistory} handleHistory={handleHistory}>
        {showHistory && (
          <History history={history} deleteHistory={deleteHistory} />
        )}
      </Input>
      {location.state && <Profile />}
    </>
  );
}

export default Search;
