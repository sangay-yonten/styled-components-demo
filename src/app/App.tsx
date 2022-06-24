import React from 'react';
import styled from 'styled-components';
import PropsComponent from './main/props';
import Counter from './main/simplified';
import ThemeProviderComponent from './main/theme-provider';
import ThemeMui from "./main/theme-mui";

const Title = styled.h1`
  font-size: 34px;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 120px;
  background: papayawhip;
`;


const App = () => {
  return (
      <Wrapper>
        {/* First styled component - Hello World */}
        <Title>
          Hello World!
        </Title>
        {/* Props Demo */}
        <PropsComponent />
        {/* Simplified code demo */}
        <Counter />
        {/* ThemeProvider demo */}
        <ThemeProviderComponent />
        {/* styled mui demo */}
        <ThemeMui />
      </Wrapper>
  );
}

export default App;
