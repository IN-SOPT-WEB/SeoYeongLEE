import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface HistoryProps {
  history: string[];
  deleteHistory: (idex: number) => void;
}

function History(props: HistoryProps) {
  const navigate = useNavigate();
  const { history, deleteHistory } = props;

  const handleSearch = (value: string) => {
    navigate(`/search/${value}`, {
      state: {
        username: value,
      },
    });
  };

  return (
    <Root>
      {history.map((value, idx) => (
        <Item key={value}>
          <span onClick={() => handleSearch(value)}>{value}</span>
          <Close onClick={() => deleteHistory(idx)}>x</Close>
        </Item>
      ))}
    </Root>
  );
}

export default History;

const Root = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  z-index: 10;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background-color: #ececec;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const Close = styled.span`
  color: #000;
  font-weight: bold;
`;
