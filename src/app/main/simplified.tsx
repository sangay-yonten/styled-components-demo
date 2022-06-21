import React, { useState } from 'react';
import './../App.css';
import styled from "styled-components";

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.p`
  color: lightseagreen;
  font-weight: bold;
`;
const ButtonGroup = styled.div`
  width: 10%;
  display: flex;
  flex-basis: border-box;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.button`
  color: lightseagreen;
  font-size: 24px;
  border: 2px solid lightseagreen;
  border-radius: 8px;
  padding: 12px 18px;
`;

const Counter = () => {
    const [ state, setState ] = useState({count: 0});
    // const state = { count: 0 };

    const increment = () => setState({ count: state.count + 1 });
    const decrement = () => setState({ count: state.count - 1 });
    return (
        <>
            {/*<div className="counter">
                 <p className="paragraph">{state.count}</p>
                 <div className="button-group">
                     <button className="button" onClick={decrement}>
                         -
                     </button>
                     <button className="button" onClick={increment}>
                         +
                     </button>
                 </div>
            </div>*/}
            <CounterContainer>
                <Paragraph>{state.count}</Paragraph>
                <ButtonGroup>
                    <Button onClick={decrement}>-</Button>
                    <Button onClick={increment}>+</Button>
                </ButtonGroup>
            </CounterContainer>
        </>
    );
}

export default Counter;
