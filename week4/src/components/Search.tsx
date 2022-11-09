import { useState } from "react";
import { useLocation } from "react-router-dom";

import Input from "./Input";
import Profile from "./Profile";

function Search() {
  const [history, setHistory] = useState<string[]>([]);
  const location = useLocation();

  const handleHistory = (input: string) => {
    setHistory((prev) => [...prev, input]);
  };
  return (
    <>
      <Input handleHistory={handleHistory} />
      {location.state && <Profile />}
    </>
  );
}

export default Search;
