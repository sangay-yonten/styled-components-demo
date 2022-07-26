import React, { useState } from 'react';
import './../App.css';
import styled from "styled-components";
import { CounterContainer, Button, ButtonGroup, Paragraph } from '../../assets/styles/simplified';

const Counter = () => {
    const [ state, setState ] = useState({count: 0});
    // const state = { count: 0 };

    const increment = () => setState({ count: state.count + 1 });
    const decrement = () => setState({ count: state.count - 1 });
    return (
        <>
            <div className="counter">
                 <p className="paragraph">{state.count}</p>
                 <div className="button-group">
                     <button className="button" onClick={decrement}>
                         -
                     </button>
                     <button className="button" onClick={increment}>
                         +
                     </button>
                 </div>
            </div>
            {/*<CounterContainer>*/}
            {/*    <Paragraph>{state.count}</Paragraph>*/}
            {/*    <ButtonGroup>*/}
            {/*        <Button onClick={decrement}>-</Button>*/}
            {/*        <Button onClick={increment}>+</Button>*/}
            {/*    </ButtonGroup>*/}
            {/*</CounterContainer>*/}
        </>
    );
}

export default Counter;
