import React from 'react';
import styled from 'styled-components';
import PropsComponent from './main/props';
import Counter from "./main/simplified";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


const App = () => {
  return (
      <Wrapper>
        {/* First styled component - Hello World */}
        <Title>
          Hello World!
        </Title>
        {/* Simplified code demo */}
        {/*<Counter/>*/}
      </Wrapper>
  );
}

export default App;
