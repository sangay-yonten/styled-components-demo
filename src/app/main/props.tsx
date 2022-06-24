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

  cursor: pointer;
  font-size: 24px;
  margin: 12px;
  padding: 12px 24px;
  border: 2px solid palevioletred;
  border-radius: 4px;
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