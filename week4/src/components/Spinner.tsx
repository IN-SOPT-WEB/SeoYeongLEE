import spinner from '../assets/spinner.gif';
import styled from 'styled-components';

export function Spinner() {
    return (
        <Root>
            <img src={spinner} alt="로딩 중" width="50px"/>
        </Root>
    );
  }
  
  const Root = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  `;