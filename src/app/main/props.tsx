import React from 'react';
import styled from 'styled-components';

const PropsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props ? "palevioletred" : "white"};
  color: ${props => props ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const PropsComponent = () => {
    return (
        <PropsContainer>
            <Button>Normal</Button>
            <Button>Primary</Button>
        </PropsContainer>
    );
}

export default PropsComponent;