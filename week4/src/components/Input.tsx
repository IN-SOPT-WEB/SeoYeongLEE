import styled from 'styled-components';

function Input() {
  return (
    <Root>
      <h1>GIthub Profile Finder</h1>
      <input type="text" placeholder="Github Username" />
    </Root>
  )
}

export default Input

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
